import { notFound } from "next/navigation"
import { getStudentById, getExamResult } from "@/lib/data"
import StudentReportCard from "@/components/student-report-card"
import ResultActions from "@/components/result-actions"

interface PageProps {
  params: Promise<{
    academicYear: string
    examType: string
    examPeriod: string
    studentId: string
  }>
}

export default async function ResultPage({ params }: PageProps) {
  const resolvedParams = await params
  const { academicYear, examType, examPeriod: rawExamPeriod, studentId } = resolvedParams
  
  const student = getStudentById(studentId)
  const examPeriod = decodeURIComponent(rawExamPeriod)
  const examResult = getExamResult(studentId, examType, examPeriod, academicYear)

  if (!student || !examResult) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation & actions – hidden on print */}
      <ResultActions
        backUrl={`/results/${academicYear}/${examType}/${encodeURIComponent(examPeriod)}`}
        studentName={student.name}
        examLabel={examPeriod}
      />

      {/* Report Card */}
      <StudentReportCard student={student} examResult={examResult} />
    </div>
  )
}
