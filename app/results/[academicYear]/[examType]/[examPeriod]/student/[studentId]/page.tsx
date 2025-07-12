import { notFound } from "next/navigation"
import { getStudentById, getExamResult } from "@/lib/data"
import StudentReportCard from "@/components/student-report-card"
import ResultActions from "@/components/result-actions"

interface PageProps {
  params: {
    academicYear: string
    examType: string
    examPeriod: string
    studentId: string
  }
}

export default function ResultPage({ params }: PageProps) {
  const student = getStudentById(params.studentId)
  const examPeriod = decodeURIComponent(params.examPeriod)
  const examResult = getExamResult(params.studentId, params.examType, examPeriod, params.academicYear)

  if (!student || !examResult) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation & actions – hidden on print */}
      <ResultActions
        backUrl={`/results/${params.academicYear}/${params.examType}/${encodeURIComponent(params.examPeriod)}`}
        studentName={student.name}
        examLabel={examPeriod}
      />

      {/* Report Card */}
      <StudentReportCard student={student} examResult={examResult} />
    </div>
  )
}
