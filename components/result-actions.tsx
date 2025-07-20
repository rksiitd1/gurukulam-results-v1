"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2, Printer, Download } from "lucide-react"
import { useRouter } from "next/navigation"

interface ResultActionsProps {
  backUrl: string
  studentName: string
  examLabel: string
}

export default function ResultActions({ backUrl, studentName, examLabel }: ResultActionsProps) {
  const router = useRouter()

  const handleBack = () => {
    router.push(backUrl)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${studentName} - ${examLabel}`,
          text: `Question Paper: ${studentName} - ${examLabel}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    window.print()
  }

  return (
    <div className="print:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBack}
              className="flex items-center space-x-2 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </Button>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">{studentName}</h1>
              <p className="text-sm text-gray-600">{examLabel}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex items-center space-x-2 bg-transparent"
            >
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="flex items-center space-x-2 bg-transparent"
            >
              <Printer className="h-4 w-4" />
              <span>Print</span>
            </Button>
            <Button
              size="sm"
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              <span>PDF</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
