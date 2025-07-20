"use client"
import { useState } from "react"
import { questionPapers } from "@/lib/data"
import { useRouter } from "next/navigation"

export default function QuestionPaperSelection() {
  const router = useRouter()
  const [className, setClassName] = useState("")
  const [subject, setSubject] = useState("")
  const [chapter, setChapter] = useState("")
  const [setNum, setSetNum] = useState("")

  // Get available classes from data
  const classOptions = Object.keys(questionPapers)
  // Get subjects for selected class
  const subjectOptions = className ? Object.keys((questionPapers as any)[className]) : []
  // Get chapters for selected subject
  const chapterOptions = className && subject ? ((questionPapers as any)[className][subject].chapters.map((c: any) => c.name)) : []
  // Get sets for selected chapter
  const setOptions = className && subject && chapter ? ((questionPapers as any)[className][subject].chapters.find((c: any) => c.name === chapter)?.sets.map((s: any) => s.set)) : []

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (className && subject && chapter && setNum) {
      router.push(`/question-paper/${className}/${subject}/${encodeURIComponent(chapter)}/${setNum}`)
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Select Question Paper</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Class</label>
          <select value={className} onChange={e => { setClassName(e.target.value); setSubject(""); setChapter(""); setSetNum("") }} className="w-full border p-2 rounded">
            <option value="">Select class</option>
            {classOptions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        {className && (
          <div>
            <label className="block font-semibold mb-1">Subject</label>
            <select value={subject} onChange={e => { setSubject(e.target.value); setChapter(""); setSetNum("") }} className="w-full border p-2 rounded">
              <option value="">Select subject</option>
              {subjectOptions.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        )}
        {subject && (
          <div>
            <label className="block font-semibold mb-1">Chapter</label>
            <select value={chapter} onChange={e => { setChapter(e.target.value); setSetNum("") }} className="w-full border p-2 rounded">
              <option value="">Select chapter</option>
              {chapterOptions.map((ch: string) => <option key={ch} value={ch}>{ch}</option>)}
            </select>
          </div>
        )}
        {chapter && (
          <div>
            <label className="block font-semibold mb-1">Set</label>
            <select value={setNum} onChange={e => setSetNum(e.target.value)} className="w-full border p-2 rounded">
              <option value="">Select set</option>
              {setOptions.map((setVal: any) => <option key={setVal} value={setVal}>{setVal}</option>)}
            </select>
          </div>
        )}
        <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded font-bold mt-4" disabled={!(className && subject && chapter && setNum)}>
          View Question Paper
        </button>
      </form>
    </div>
  )
} 