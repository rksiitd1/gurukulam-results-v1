"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  FileText, 
  Target, 
  TrendingUp, 
  Calendar,
  Star,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Play,
  CheckCircle,
  Clock,
  Zap,
  Eye,
  BarChart3,
  Trophy,
  Sparkles
} from "lucide-react"
import { students, examResults, classes } from "@/lib/data"
import { useState, useEffect } from "react"

const colors = {
  saffron: "#FF9933",
  darkgreen: "#138808",
  navy: "#00008B",
  lightgray: "#F5F5F5",
  headerbg: "#FFF8DC",
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const totalStudents = students.length
  const totalResults = examResults.length
  const totalClasses = classes.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Enhanced Header */}
      <div className="relative overflow-hidden" style={{ backgroundColor: colors.headerbg }}>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-100/50 via-yellow-100/50 to-green-100/50"></div>
        
        <div className="relative p-8 lg:p-12">
          <div className="max-w-7xl mx-auto text-center">
            {/* Logo and Title Section */}
            <div className={`flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 flex items-center justify-center mb-4 lg:mb-0 lg:mr-8 shadow-lg transform hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: `${colors.saffron}20`,
                  borderColor: colors.saffron,
                }}
              >
                <GraduationCap className="w-10 h-10 lg:w-12 lg:h-12" style={{ color: colors.navy }} />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  DIVYA BIHAR GLOBAL GURUKULAM
                </h1>
                <h2 className="text-2xl lg:text-3xl font-bold text-green-700">
                  (DBG Gurukulam)
                </h2>
              </div>
              <div
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-4 flex items-center justify-center mt-4 lg:mt-0 lg:ml-8 shadow-lg transform hover:scale-110 transition-transform duration-300"
                style={{
                  backgroundColor: `${colors.darkgreen}20`,
                  borderColor: colors.darkgreen,
                }}
              >
                <BookOpen className="w-10 h-10 lg:w-12 lg:h-12" style={{ color: colors.navy }} />
              </div>
            </div>

            {/* Tagline and Location */}
            <div className={`space-y-3 text-lg lg:text-xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="font-semibold text-gray-800">Raghopur, Supaul, Bihar – 852111</p>
              <p className="text-gray-700">
                Managed by: <strong className="text-green-700">Divya Bihar Mission</strong>
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <p className="text-2xl italic font-medium text-orange-600">
                  Education with Yogic Values
                </p>
                <Sparkles className="w-5 h-5 text-orange-500" />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link href="/results">
                <Button
                  size="lg"
                  className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                >
                  <FileText className="mr-3 h-5 w-5" />
                  Check Results
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/student">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  <Users className="mr-3 h-5 w-5" />
                  Student Portal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 lg:p-8 relative z-10">
        {/* Enhanced Statistics Dashboard */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 -mt-8 relative z-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Students</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {totalStudents}
                  </p>
                  <p className="text-xs text-green-600 font-medium mt-1">Active Learners</p>
                </div>
                <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Classes</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                    {totalClasses}
                  </p>
                  <p className="text-xs text-green-600 font-medium mt-1">Grade Levels</p>
                </div>
                <div className="p-3 rounded-full bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Total Results</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                    {totalResults.toLocaleString()}
                  </p>
                  <p className="text-xs text-green-600 font-medium mt-1">Assessments</p>
                </div>
                <div className="p-3 rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors duration-300">
                  <Award className="h-8 w-8 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">Academic Years</p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                    2
                  </p>
                  <p className="text-xs text-green-600 font-medium mt-1">Active Years</p>
                </div>
                <div className="p-3 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors duration-300">
                  <Calendar className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hero Section with Enhanced Design */}
        <Card className={`mb-12 shadow-2xl border-0 overflow-hidden transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-orange-500/10 via-yellow-500/10 to-green-500/10 p-8 lg:p-12 relative">
            <div className="relative z-10">
              <CardHeader className="text-center pb-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-green-500 flex items-center justify-center mr-4">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Welcome to DBG Gurukulam
                  </CardTitle>
                </div>
                <CardDescription className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto">
                  Experience comprehensive examination results and academic progress reports designed to nurture holistic development
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link href="/results">
                    <Button
                      size="lg"
                      className="text-xl px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                    >
                      <FileText className="mr-3 h-6 w-6" />
                      Explore Results
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                    Secure Access
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-4 h-4 mr-2 text-blue-600" />
                    Detailed Analytics
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-orange-600" />
                    Real-time Updates
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>

        {/* Enhanced Mission & Values Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl lg:text-3xl group-hover:text-green-700 transition-colors duration-300">
                <Target className="mr-3 h-6 w-6 text-green-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                At DBG Gurukulam, we are committed to providing holistic education that combines modern academic
                excellence with traditional yogic values. Our mission is to nurture young minds and develop well-rounded
                individuals who contribute positively to society while maintaining strong cultural roots.
              </p>
              <div className="mt-6 flex items-center text-green-600 font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                Building Future Leaders
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl lg:text-3xl group-hover:text-orange-700 transition-colors duration-300">
                <Award className="mr-3 h-6 w-6 text-orange-600" />
                Our Values
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Excellence in Academic Achievement",
                  "Character Development through Yoga",
                  "Cultural Heritage Preservation",
                  "Community Service and Social Responsibility"
                ].map((value, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mr-3 mt-1 group-hover/item:bg-orange-200 transition-colors duration-300">
                      <span className="text-orange-600 font-bold text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Assessment System */}
        <Card className={`mb-12 shadow-2xl border-0 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Comprehensive Assessment System
              </CardTitle>
            </div>
            <CardDescription className="text-center text-lg lg:text-xl max-w-3xl mx-auto">
              Our multi-tiered evaluation approach ensures holistic student development through continuous assessment and growth tracking
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Jigyāsa Anveshan",
                  subtitle: "Monthly Assessment",
                  description: "Regular monthly evaluations (I-X) conducted from April to January, tracking continuous progress across all academic subjects and co-curricular activities",
                  icon: FileText,
                  color: colors.saffron,
                  bgColor: `${colors.saffron}10`
                },
                {
                  title: "Bodha Manthan",
                  subtitle: "Term-End Examination",
                  description: "Comprehensive bi-annual assessments (Mid-term & Final) providing in-depth evaluation after extended learning periods with practical and theoretical components",
                  icon: BookOpen,
                  color: colors.darkgreen,
                  bgColor: `${colors.darkgreen}10`
                },
                {
                  title: "Pragya Siddhi",
                  subtitle: "Annual Examination",
                  description: "Year-end culminating assessment including academic excellence, spiritual growth, moral development, and overall personality evaluation",
                  icon: Award,
                  color: colors.navy,
                  bgColor: `${colors.navy}10`
                }
              ].map((assessment, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                  style={{ backgroundColor: assessment.bgColor }}
                >
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: assessment.color, color: "white" }}
                  >
                    <assessment.icon className="h-10 w-10" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-800">
                    {assessment.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-600 mb-3">{assessment.subtitle}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {assessment.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Features Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              icon: Users,
              title: "Holistic Assessment",
              description: "Academic subjects combined with character development and life skills",
              color: "text-orange-600",
              bgColor: "bg-orange-100"
            },
            {
              icon: FileText,
              title: "Detailed Reports",
              description: "Comprehensive marksheets with qualitative feedback and progress tracking",
              color: "text-green-600",
              bgColor: "bg-green-100"
            },
            {
              icon: TrendingUp,
              title: "Progress Tracking",
              description: "Continuous monitoring of student growth across multiple assessment formats",
              color: "text-blue-600",
              bgColor: "bg-blue-100"
            },
            {
              icon: Award,
              title: "Grade Excellence",
              description: "Clear grading system with performance indicators and improvement guidance",
              color: "text-purple-600",
              bgColor: "bg-purple-100"
            }
          ].map((feature, index) => (
            <Card key={index} className="text-center shadow-xl border-0 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
              <CardContent className="pt-8 pb-6">
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${feature.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Achievements Section */}
        <Card className={`mb-12 shadow-2xl border-0 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center mr-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Recent Achievements
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Academic Excellence",
                  description: "95% of students achieved above 80% in recent assessments",
                  icon: Star,
                  color: "text-yellow-600",
                  bgColor: "bg-yellow-100"
                },
                {
                  title: "Character Development",
                  description: "100% participation in yoga and meditation programs",
                  icon: Heart,
                  color: "text-red-600",
                  bgColor: "bg-red-100"
                },
                {
                  title: "Innovation Award",
                  description: "Recognized for innovative teaching methodologies",
                  icon: Lightbulb,
                  color: "text-blue-600",
                  bgColor: "bg-blue-100"
                }
              ].map((achievement, index) => (
                <div key={index} className="text-center p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                  <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${achievement.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-gray-800">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Contact Information */}
        <Card className={`shadow-2xl border-0 transition-all duration-1000 delay-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardHeader>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Contact Information
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-green-700">School Address</h4>
                    <div className="text-gray-700 text-lg space-y-1">
                      <p className="font-semibold">Divya Bihar Global Gurukulam</p>
                      <p>Raghopur, Supaul</p>
                      <p>Bihar – 852111</p>
                      <p className="text-sm text-gray-600 mt-2">
                        A premier educational institution committed to excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-blue-700">Management</h4>
                    <div className="text-gray-700 text-lg space-y-1">
                      <p><strong>Managed by:</strong> Divya Bihar Mission</p>
                      <p>Committed to Educational Excellence</p>
                      <p>With Traditional Yogic Values</p>
                      <p className="text-sm text-gray-600 mt-2">
                        Nurturing minds, building character, creating leaders
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-lg mb-2">© {currentYear} Divya Bihar Global Gurukulam. All rights reserved.</p>
          <p className="text-gray-400">Empowering minds through education with yogic values</p>
        </div>
      </footer>
    </div>
  )
}
