import { notFound } from "next/navigation"
import MultiModeReportCard from "@/components/multi-mode-report-card"
import { students } from "@/lib/data/students"
import { marksData } from "@/lib/data/marks-data"

interface PageProps {
  params: {
    academicYear: string
    examType: string
    examPeriod: string
    studentId: string
  }
}

export default function MultiModeStudentResultPage({ params }: PageProps) {
  const { academicYear, examType, examPeriod, studentId } = params

  // Decode the exam period
  const decodedExamPeriod = decodeURIComponent(examPeriod)

  // Find the student
  const student = students.find((s) => s.id === studentId)
  if (!student) {
    notFound()
  }

  // Find the class data
  const classData = marksData.find((c) => c.className === student.class.replace(/\D/g, ""))
  if (!classData) {
    notFound()
  }

  // Find the student's marks data
  const studentMarks = classData.students.find((s) => s.name === student.name)
  if (!studentMarks) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MultiModeReportCard
        student={student}
        studentMarks={studentMarks}
        examType={examType}
        examPeriod={decodedExamPeriod}
        academicYear={academicYear}
      />
    </div>
  )
}
