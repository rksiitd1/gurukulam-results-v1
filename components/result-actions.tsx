"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer, Share2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface ResultActionsProps {
  backUrl: string
  studentName: string
  examLabel: string
}

export default function ResultActions({ backUrl, studentName, examLabel }: ResultActionsProps) {
  const router = useRouter()

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    // In a real implementation, this would generate and download a PDF
    alert("PDF download functionality would be implemented here")
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${studentName} - ${examLabel}`,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="print:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => router.push(backUrl)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">{studentName}</h1>
            <p className="text-sm text-gray-600">{examLabel}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button size="sm" onClick={handlePrint}>
            <Printer className="w-4 h-4 mr-2" />
            Print
          </Button>
        </div>
      </div>
    </div>
  )
}
