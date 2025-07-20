import QuestionPaper from "@/components/question-paper"
import ResultActions from "@/components/result-actions"
import { questionPapers } from "@/lib/data"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    class: string
    subject: string
    chapter: string
    set: string
  }
}

export default function QuestionPaperPage({ params }: PageProps) {
  const { class: className, subject, chapter, set } = params
  const setNumber = Number.parseInt(set)

  // Validate that the question paper exists
  const classData = (questionPapers as any)[className]
  if (!classData) return notFound()

  const subjectData = classData[subject]
  if (!subjectData) return notFound()

  const chapterData = subjectData.chapters.find((c: any) => c.name === decodeURIComponent(chapter))
  if (!chapterData) return notFound()

  const setData = chapterData.sets.find((s: any) => s.set === setNumber)
  if (!setData) return notFound()

  const backUrl = `/question-paper`
  const paperTitle = `Class ${className} ${subject}`
  const examLabel = `${decodeURIComponent(chapter)} - Set ${setNumber}`

  return (
    <>
      <ResultActions backUrl={backUrl} studentName={paperTitle} examLabel={examLabel} />
      <QuestionPaper className={className} subject={subject} chapter={decodeURIComponent(chapter)} set={setNumber} />
    </>
  )
}

export async function generateStaticParams() {
  const params: Array<{
    class: string
    subject: string
    chapter: string
    set: string
  }> = []

  Object.entries(questionPapers).forEach(([className, subjects]) => {
    Object.entries(subjects).forEach(([subject, subjectData]) => {
      subjectData.chapters.forEach((chapter: any) => {
        chapter.sets.forEach((set: any) => {
          params.push({
            class: className,
            subject: subject,
            chapter: encodeURIComponent(chapter.name),
            set: set.set.toString(),
          })
        })
      })
    })
  })

  return params
}
