import type { StudentData, ExamResult } from "@/lib/data"

// Define the color scheme to match the new design
const colors = {
  saffron: "#FF9933",
  darkgreen: "#138808",
  navy: "#00008B",
  lightgray: "#F5F5F5",
  headerbg: "#FFF8DC",
}

// Logo component to replace TikZ drawings
const Logo = ({ type, color }: { type: "dbg" | "dbm"; color: string }) => (
  <div className="flex flex-col items-center w-24">
    {type === "dbg" ? (
      <div className="w-16 h-16 rounded-full bg-orange-100 border-2 border-orange-300 flex items-center justify-center relative">
        <div className="w-6 h-0.5 bg-blue-900 absolute"></div>
        <div className="w-0.5 h-6 bg-blue-900 absolute"></div>
      </div>
    ) : (
      <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-green-700 flex items-center justify-center relative">
        <div className="w-10 h-10 rounded-full border-2 border-orange-500"></div>
      </div>
    )}
    <span className="text-xs text-blue-900 mt-1">{type === "dbg" ? "DBG Logo" : "DBM Logo"}</span>
  </div>
)

interface StudentReportCardProps {
  student: StudentData
  examResult: ExamResult
}

export default function StudentReportCard({ student, examResult }: StudentReportCardProps) {
  const academicSubtotal = examResult.academicMarks.reduce((sum, subject) => sum + subject.scaledMarks, 0)
  const coActivitiesSubtotal = examResult.coActivities.reduce((sum, activity) => sum + activity.marks, 0)
  const coActivitiesTotal = examResult.coActivities.reduce((sum, activity) => sum + activity.outOf, 0)
  const academicRawTotal = examResult.academicMarks.reduce((sum, subject) => sum + subject.rawMarks, 0)
  const academicMaxTotal = examResult.academicMarks.reduce((sum, subject) => sum + subject.total, 0)

  // Get exam title based on type
  const getExamTitle = () => {
    switch (examResult.examType) {
      case "jigyasa-anveshan":
        return `JIGYASA ANVESHAN ${examResult.examPeriod.toUpperCase()}`
      case "bodha-manthan":
        return `BODHA MANTHAN ${examResult.examPeriod.toUpperCase()}`
      case "pragya-siddhi":
        return `PRAGYA SIDDHI ${examResult.examPeriod.toUpperCase()}`
      default:
        return examResult.examPeriod.toUpperCase()
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white relative" style={{fontFamily: 'serif'}}>
      {/* Decorative Border */}
      <div className="absolute inset-0 border-4 border-orange-300 m-2"></div>
      
      {/* Header Section */}
      <div className="relative z-10 mb-6">
        <div className="bg-yellow-50 p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            {/* Left Logo */}
            <Logo type="dbg" color={colors.saffron} />
            
            {/* Center Content */}
            <div className="text-center flex-1 mx-4">
              <h1 className="text-3xl font-bold text-blue-900 mb-1">DIVYA BIHAR GLOBAL GURUKULAM</h1>
              <h2 className="text-xl font-bold text-green-700 mb-2">(DBG Gurukulam)</h2>
              <p className="text-base mb-1">Raghopur, Supaul, Bihar – 852111</p>
              <p className="text-sm mb-1">Managed by: <span className="font-bold">Divya Bihar Mission</span></p>
              <p className="text-sm italic text-orange-500">Education with Yogic Values</p>
            </div>
            
            {/* Right Logo */}
            <Logo type="dbm" color={colors.darkgreen} />
          </div>
        </div>
      </div>

      {/* Assessment Title */}
      <div className="bg-orange-100 p-4 mb-6 text-center">
        <h3 className="text-xl font-bold text-blue-900 mb-1">{getExamTitle()}</h3>
        <h4 className="text-lg font-bold text-green-700">
          {examResult.examType === "jigyasa-anveshan" ? "Monthly Assessment Report" : 
           examResult.examType === "bodha-manthan" ? "Term-End Assessment Report" : 
           "Annual Assessment Report"}
        </h4>
      </div>

      {/* Student Information */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Student Name: {student.name}</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Class: {student.class}</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Roll No: {student.rollNo}</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900">Period: {examResult.examPeriod}</td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 font-bold text-blue-900" colSpan={2}>Father's Name: {student.fatherName}</td>
              <td className="border border-gray-400 p-2 font-bold text-blue-900" colSpan={2}>Mother's Name: {student.motherName}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Academic Subjects */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-bold text-green-700 mb-3">ACADEMIC SUBJECTS</h3>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="border border-gray-400 p-2 font-bold">Subject</th>
              <th className="border border-gray-400 p-2 font-bold">Raw Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Total</th>
              <th className="border border-gray-400 p-2 font-bold">Scaled Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Out of</th>
            </tr>
          </thead>
          <tbody>
            {examResult.academicMarks.map((subject, index) => (
              <tr key={index}>
                <td className="border border-gray-400 p-2">{subject.subject}</td>
                <td className="border border-gray-400 p-2 text-center">{subject.rawMarks}</td>
                <td className="border border-gray-400 p-2 text-center">{subject.total}</td>
                <td className="border border-gray-400 p-2 text-center">{subject.scaledMarks}</td>
                <td className="border border-gray-400 p-2 text-center">{subject.outOf}</td>
              </tr>
            ))}
            <tr className="bg-orange-100">
              <td className="border border-gray-400 p-2 font-bold">Academic Subtotal</td>
              <td className="border border-gray-400 p-2 text-center font-bold">{academicRawTotal}</td>
              <td className="border border-gray-400 p-2 text-center font-bold">{academicMaxTotal}</td>
              <td className="border border-gray-400 p-2 text-center font-bold">{academicSubtotal}</td>
              <td className="border border-gray-400 p-2 text-center font-bold">60</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Co-Curricular Activities */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-bold text-green-700 mb-3">CO-CURRICULAR & EXTRA-CURRICULAR ACTIVITIES</h3>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="border border-gray-400 p-2 font-bold">Activity</th>
              <th className="border border-gray-400 p-2 font-bold">Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Out of</th>
              <th className="border border-gray-400 p-2 font-bold">Activity</th>
              <th className="border border-gray-400 p-2 font-bold">Marks</th>
              <th className="border border-gray-400 p-2 font-bold">Out of</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: Math.ceil(examResult.coActivities.length / 2) }).map((_, rowIndex) => {
              const leftActivity = examResult.coActivities[rowIndex * 2]
              const rightActivity = examResult.coActivities[rowIndex * 2 + 1]
              return (
                <tr key={rowIndex}>
                  <td className="border border-gray-400 p-2">{leftActivity?.activity || ""}</td>
                  <td className="border border-gray-400 p-2 text-center">{leftActivity?.marks || ""}</td>
                  <td className="border border-gray-400 p-2 text-center">{leftActivity?.outOf || ""}</td>
                  <td className="border border-gray-400 p-2">{rightActivity?.activity || ""}</td>
                  <td className="border border-gray-400 p-2 text-center">{rightActivity?.marks || ""}</td>
                  <td className="border border-gray-400 p-2 text-center">{rightActivity?.outOf || ""}</td>
                </tr>
              )
            })}
            <tr className="bg-orange-100">
              <td className="border border-gray-400 p-2 font-bold text-center" colSpan={6}>
                Co-Curricular Subtotal: {coActivitiesSubtotal} / {coActivitiesTotal}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Performance Summary */}
      <div className="mb-6">
        <div className="bg-blue-50 p-4 border border-gray-200">
          <h3 className="text-center text-lg font-bold text-green-700 mb-3">PERFORMANCE SUMMARY</h3>
          <div className="flex justify-center">
            <table className="border-collapse border border-gray-400 w-4/5">
              <thead>
                <tr className="bg-orange-200">
                  <th className="border border-gray-400 p-2 font-bold">Total Marks</th>
                  <th className="border border-gray-400 p-2 font-bold">Maximum Marks</th>
                  <th className="border border-gray-400 p-2 font-bold">Percentage</th>
                  <th className="border border-gray-400 p-2 font-bold">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-2 text-center">{examResult.totalMarks}</td>
                  <td className="border border-gray-400 p-2 text-center">{examResult.maxMarks}</td>
                  <td className="border border-gray-400 p-2 text-center">{examResult.percentage}%</td>
                  <td className="border border-gray-400 p-2 text-center font-bold">{examResult.grade}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Remarks Section */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 p-2 font-bold text-left">Class Teacher's Remarks:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 h-20">
                {examResult.remarks && <p className="text-sm">{examResult.remarks}</p>}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Signature Section */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-400 p-2 font-bold">Class Teacher</th>
              <th className="border border-gray-400 p-2 font-bold">Date of Issue</th>
              <th className="border border-gray-400 p-2 font-bold">Principal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 p-2 h-16"></td>
              <td className="border border-gray-400 p-2 h-16"></td>
              <td className="border border-gray-400 p-2 h-16"></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Line */}
      <div className="flex justify-center">
        <div className="w-96 h-0.5 bg-orange-500"></div>
      </div>
    </div>
  )
}
