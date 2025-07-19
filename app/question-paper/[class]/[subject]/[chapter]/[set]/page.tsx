import QuestionPaper from "@/components/question-paper"
import { notFound } from "next/navigation"

interface Props {
  params: {
    class: string
    subject: string
    chapter: string
    set: string
  }
}

export default function QuestionPaperPage({ params }: Props) {
  const { class: className, subject, chapter, set } = params
  // Only allow numeric set
  const setNum = Number(set)
  if (isNaN(setNum)) return notFound()
  return (
    <QuestionPaper className={className} subject={subject} chapter={chapter} set={setNum} />
  )
} 