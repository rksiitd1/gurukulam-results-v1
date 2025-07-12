"use client"

import { useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Printer, Download, Share } from "lucide-react"

interface Props {
  backUrl: string
  studentName: string
  examLabel: string
}

export default function ResultActions({ backUrl, studentName, examLabel }: Props) {
  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleShare = useCallback(async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${studentName} – ${examLabel} Result`,
          url: window.location.href,
        })
        return
      } catch {}
    }
    await navigator.clipboard.writeText(window.location.href)
    alert("Result link copied to clipboard!")
  }, [studentName, examLabel])

  return (
    <div className="print:hidden p-4 bg-gray-50 border-b">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href={backUrl}>
          <Button variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Search
          </Button>
        </Link>

        <div className="flex gap-2">
          <Button onClick={handleShare} variant="outline">
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button onClick={handlePrint} variant="outline">
            <Printer className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button onClick={handlePrint}>
            <Download className="h-4 w-4 mr-2" />
            PDF
          </Button>
        </div>
      </div>
    </div>
  )
}
