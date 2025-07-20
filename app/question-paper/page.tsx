import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { questionPapers } from "@/lib/data"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

export default function QuestionPaperHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header title="QUESTION PAPERS" subtitle="Select Class and Subject" showNavigation={true} />

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(questionPapers).map(([className, subjects]) =>
            Object.entries(subjects).map(([subject, subjectData]) => (
              <Card key={`${className}-${subject}`} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-500/10 to-green-500/10">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-900">Class {className}</CardTitle>
                    <Badge className="bg-blue-100 text-blue-700">{subject}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-gray-600">Available Chapters: {subjectData.chapters.length}</p>
                    <div className="space-y-2">
                      {subjectData.chapters.map((chapter: any) => (
                        <div key={chapter.name} className="border-l-4 border-blue-500 pl-3">
                          <h4 className="font-semibold text-gray-800">{chapter.name}</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {chapter.sets.map((set: any) => (
                              <Link
                                key={set.set}
                                href={`/question-paper/${className}/${subject}/${encodeURIComponent(chapter.name)}/${set.set}`}
                                className="inline-block"
                              >
                                <Badge variant="outline" className="hover:bg-blue-50 cursor-pointer transition-colors">
                                  Set {set.set}
                                </Badge>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )),
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
