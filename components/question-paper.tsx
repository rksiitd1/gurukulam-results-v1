import { questionPapers } from "@/lib/data"
import React from "react"

interface QuestionPaperProps {
  className: string
  subject: string
  chapter: string
  set: number
}

export default function QuestionPaper({ className, subject, chapter, set }: QuestionPaperProps) {
  // Find the relevant question set
  const classData = (questionPapers as any)[className]
  const subjectData = classData?.[subject]
  const chapterData = subjectData?.chapters.find((c: any) => c.name === chapter)
  const setData = chapterData?.sets.find((s: any) => s.set === set)
  if (!setData) return <div>Question paper not found.</div>

  return (
    <div className="max-w-3xl mx-auto p-4 print:p-2 bg-white relative print:max-w-none print:mx-0" style={{fontFamily: 'serif'}}>
      {/* Decorative Border */}
      <div className="absolute inset-0 border-4 border-orange-300 m-2 print:m-1"></div>
      {/* Header Section */}
      <div className="relative z-10 mb-4 print:mb-2">
        <div className="bg-yellow-50 p-3 print:p-2 border border-gray-200">
          <h1 className="text-2xl print:text-xl font-bold text-blue-900 mb-1 print:mb-0 text-center">
            {subject} Question Paper
          </h1>
          <p className="text-center text-sm print:text-xs mb-1 print:mb-0">Class: {className} | Chapter: {chapter} | Set: {set}</p>
        </div>
      </div>
      {/* Questions Section */}
      <div className="mb-4 print:mb-2">
        <table className="w-full border-collapse border border-gray-400 text-sm print:text-xs">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border border-gray-400 p-1.5 print:p-1 font-bold">Q. No.</th>
              <th className="border border-gray-400 p-1.5 print:p-1 font-bold">Question</th>
              <th className="border border-gray-400 p-1.5 print:p-1 font-bold">Marks</th>
            </tr>
          </thead>
          <tbody>
            {setData.questions.map((q: any) => (
              <tr key={q.number}>
                <td className="border border-gray-400 p-1.5 print:p-1 text-center font-bold">{q.number}</td>
                <td className="border border-gray-400 p-1.5 print:p-1">{q.text}</td>
                <td className="border border-gray-400 p-1.5 print:p-1 text-center">{q.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Footer for print layout (page break) */}
      <div className="mt-8 print:mt-4 text-center text-xs text-gray-500">
        <div className="print:page-break-after">--- End of Page 1 ---</div>
        <div className="mt-4 print:mt-2">Instructions: Answer all questions. Use diagrams where necessary. Show all steps for full marks.</div>
      </div>
    </div>
  )
} 