import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen, Users, Award, FileText, Target, TrendingUp, Calendar } from "lucide-react"
import { students, examResults, classes } from "@/lib/data"

const colors = {
  saffron: "#FF9933",
  darkgreen: "#138808",
  navy: "#00008B",
  lightgray: "#F5F5F5",
  headerbg: "#FFF8DC",
}

export default function HomePage() {
  const totalStudents = students.length
  const totalResults = examResults.length
  const totalClasses = classes.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      {/* Header */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.headerbg }}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-green-100/50"></div>
        <div className="relative p-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div
                className="w-24 h-24 rounded-full border-4 flex items-center justify-center mr-8 shadow-lg"
                style={{
                  backgroundColor: `${colors.saffron}20`,
                  borderColor: colors.saffron,
                }}
              >
                <GraduationCap className="w-12 h-12" style={{ color: colors.navy }} />
              </div>
              <div>
                <h1 className="text-6xl font-bold mb-3" style={{ color: colors.navy }}>
                  DIVYA BIHAR GLOBAL GURUKULAM
                </h1>
                <h2 className="text-3xl font-bold" style={{ color: colors.darkgreen }}>
                  (DBG Gurukulam)
                </h2>
              </div>
              <div
                className="w-24 h-24 rounded-full border-4 flex items-center justify-center ml-8 shadow-lg"
                style={{
                  backgroundColor: `${colors.darkgreen}20`,
                  borderColor: colors.darkgreen,
                }}
              >
                <BookOpen className="w-12 h-12" style={{ color: colors.navy }} />
              </div>
            </div>
            <div className="space-y-2 text-xl">
              <p className="font-semibold">Raghopur, Supaul, Bihar – 852111</p>
              <p>
                Managed by: <strong>Divya Bihar Mission</strong>
              </p>
              <p className="text-2xl italic font-medium" style={{ color: colors.saffron }}>
                Education with Yogic Values
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 -mt-8 relative z-10">
          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Students</p>
                  <p className="text-3xl font-bold" style={{ color: colors.navy }}>
                    {totalStudents}
                  </p>
                </div>
                <Users className="h-8 w-8" style={{ color: colors.saffron }} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Classes</p>
                  <p className="text-3xl font-bold" style={{ color: colors.navy }}>
                    {totalClasses}
                  </p>
                </div>
                <BookOpen className="h-8 w-8" style={{ color: colors.darkgreen }} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Results</p>
                  <p className="text-3xl font-bold" style={{ color: colors.navy }}>
                    {totalResults.toLocaleString()}
                  </p>
                </div>
                <Award className="h-8 w-8" style={{ color: colors.saffron }} />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-white/90 backdrop-blur">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Academic Years</p>
                  <p className="text-3xl font-bold" style={{ color: colors.navy }}>
                    2
                  </p>
                </div>
                <Calendar className="h-8 w-8" style={{ color: colors.darkgreen }} />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Welcome Section */}
        <Card className="mb-8 shadow-xl border-0 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500/10 to-green-500/10 p-8">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-4xl mb-4" style={{ color: colors.navy }}>
                Welcome to DBG Gurukulam Result Portal
              </CardTitle>
              <CardDescription className="text-xl text-gray-700">
                Access comprehensive examination results and academic progress reports for all students
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Link href="/results">
                <Button
                  size="lg"
                  className="text-xl px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  style={{
                    backgroundColor: colors.darkgreen,
                    color: "white",
                  }}
                >
                  <FileText className="mr-3 h-6 w-6" />
                  Check Results
                </Button>
              </Link>
              <p className="text-sm text-gray-600 mt-4">
                Secure access with student verification • {totalResults.toLocaleString()} results available
              </p>
            </CardContent>
          </div>
        </Card>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl" style={{ color: colors.navy }}>
                <Target className="mr-3 h-6 w-6" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                At DBG Gurukulam, we are committed to providing holistic education that combines modern academic
                excellence with traditional yogic values. Our mission is to nurture young minds and develop well-rounded
                individuals who contribute positively to society while maintaining strong cultural roots.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl" style={{ color: colors.navy }}>
                <Award className="mr-3 h-6 w-6" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-gray-700 space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="font-bold mr-3 mt-1" style={{ color: colors.saffron }}>
                    •
                  </span>
                  Excellence in Academic Achievement
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3 mt-1" style={{ color: colors.saffron }}>
                    •
                  </span>
                  Character Development through Yoga
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3 mt-1" style={{ color: colors.saffron }}>
                    •
                  </span>
                  Cultural Heritage Preservation
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-3 mt-1" style={{ color: colors.saffron }}>
                    •
                  </span>
                  Community Service and Social Responsibility
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Examination Types */}
        <Card className="mb-8 shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-3xl text-center" style={{ color: colors.navy }}>
              Comprehensive Assessment System
            </CardTitle>
            <CardDescription className="text-center text-lg">
              Our multi-tiered evaluation approach ensures holistic student development
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl shadow-lg" style={{ backgroundColor: `${colors.saffron}10` }}>
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: colors.saffron, color: "white" }}
                >
                  <FileText className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-2xl mb-3" style={{ color: colors.navy }}>
                  Jigyāsa Anveshan
                </h3>
                <p className="text-lg font-semibold text-gray-600 mb-3">Monthly Assessment</p>
                <p className="text-gray-700 leading-relaxed">
                  Regular monthly evaluations (I-X) conducted from April to January, tracking continuous progress across
                  all academic subjects and co-curricular activities
                </p>
              </div>

              <div
                className="text-center p-8 rounded-xl shadow-lg"
                style={{ backgroundColor: `${colors.darkgreen}10` }}
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: colors.darkgreen, color: "white" }}
                >
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-2xl mb-3" style={{ color: colors.navy }}>
                  Bodha Manthan
                </h3>
                <p className="text-lg font-semibold text-gray-600 mb-3">Term-End Examination</p>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive bi-annual assessments (Mid-term & Final) providing in-depth evaluation after extended
                  learning periods with practical and theoretical components
                </p>
              </div>

              <div className="text-center p-8 rounded-xl shadow-lg" style={{ backgroundColor: `${colors.navy}10` }}>
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: colors.navy, color: "white" }}
                >
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="font-bold text-2xl mb-3" style={{ color: colors.navy }}>
                  Pragya Siddhi
                </h3>
                <p className="text-lg font-semibold text-gray-600 mb-3">Annual Examination</p>
                <p className="text-gray-700 leading-relaxed">
                  Year-end culminating assessment including academic excellence, spiritual growth, moral development,
                  and overall personality evaluation
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 pb-6">
              <Users className="h-16 w-16 mx-auto mb-4" style={{ color: colors.saffron }} />
              <h3 className="font-bold text-lg mb-3">Holistic Assessment</h3>
              <p className="text-gray-600">Academic subjects combined with character development and life skills</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 pb-6">
              <FileText className="h-16 w-16 mx-auto mb-4" style={{ color: colors.darkgreen }} />
              <h3 className="font-bold text-lg mb-3">Detailed Reports</h3>
              <p className="text-gray-600">Comprehensive marksheets with qualitative feedback and progress tracking</p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 pb-6">
              <TrendingUp className="h-16 w-16 mx-auto mb-4" style={{ color: colors.navy }} />
              <h3 className="font-bold text-lg mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Continuous monitoring of student growth across multiple assessment formats
              </p>
            </CardContent>
          </Card>

          <Card className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 pb-6">
              <Award className="h-16 w-16 mx-auto mb-4" style={{ color: colors.saffron }} />
              <h3 className="font-bold text-lg mb-3">Grade Excellence</h3>
              <p className="text-gray-600">Clear grading system with performance indicators and improvement guidance</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ color: colors.navy }}>
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-xl mb-4" style={{ color: colors.darkgreen }}>
                  School Address
                </h4>
                <div className="text-gray-700 text-lg space-y-2">
                  <p className="font-semibold">Divya Bihar Global Gurukulam</p>
                  <p>Raghopur, Supaul</p>
                  <p>Bihar – 852111</p>
                  <p className="text-sm text-gray-600 mt-4">
                    A premier educational institution committed to excellence
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4" style={{ color: colors.darkgreen }}>
                  Management
                </h4>
                <div className="text-gray-700 text-lg space-y-2">
                  <p>
                    <strong>Managed by:</strong> Divya Bihar Mission
                  </p>
                  <p>Committed to Educational Excellence</p>
                  <p>With Traditional Yogic Values</p>
                  <p className="text-sm text-gray-600 mt-4">Nurturing minds, building character, creating leaders</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
