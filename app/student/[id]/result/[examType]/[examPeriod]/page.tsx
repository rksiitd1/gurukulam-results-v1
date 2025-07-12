"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { getStudentById, getExamResult } from "@/lib/data"
import StudentReportCard from "@/components/student-report-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer } from "lucide-react"

interface PageProps {
  params: {
    id: string
    examType: string
    examPeriod: string
  }
}

export default function ResultPage({ params }: PageProps) {
  const student = getStudentById(params.id)
  const examPeriod = decodeURIComponent(params.examPeriod)
  const examResult = getExamResult(params.id, params.examType, examPeriod)

  if (!student || !examResult) {
    notFound()
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Hidden in print */}
      <div className="print:hidden p-4 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href={`/student/${student.id}`}>
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Student
            </Button>
          </Link>

          <div className="flex gap-2">
            <Button onClick={handlePrint} variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button onClick={handlePrint}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Report Card */}
      <StudentReportCard student={student} examResult={examResult} />
    </div>
  )
}
