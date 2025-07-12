"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { getStudentById, getExamResult } from "@/lib/data"
import StudentReportCard from "@/components/student-report-card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer } from "lucide-react"
import { useState, useEffect } from "react"

interface PageProps {
  params: Promise<{
    id: string
    examType: string
    examPeriod: string
  }>
}

export default function ResultPage({ params }: PageProps) {
  const [resolvedParams, setResolvedParams] = useState<{
    id: string
    examType: string
    examPeriod: string
  } | null>(null)

  useEffect(() => {
    const resolveParams = async () => {
      const resolved = await params
      setResolvedParams(resolved)
    }
    resolveParams()
  }, [params])

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    )
  }

  const { id, examType, examPeriod: rawExamPeriod } = resolvedParams
  const student = getStudentById(id)
  const examPeriod = decodeURIComponent(rawExamPeriod)
  const examResult = getExamResult(id, examType, examPeriod)

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
