import type { StudentData, ExamResult } from "@/lib/data"

// Define the color scheme to match the LaTeX document
const colors = {
  saffron: "#FF9933",
  darkgreen: "#138808",
  navy: "#00008B",
  lightgray: "#F5F5F5",
  headerbg: "#FFF8DC",
}

// Logo component to replace TikZ drawings
const Logo = ({ type, color }: { type: "dbg" | "dbm"; color: string }) => (
  <div className="flex flex-col items-center">
    <div
      className={`w-16 h-16 rounded-full border-2 flex items-center justify-center`}
      style={{
        backgroundColor: `${color}20`,
        borderColor: color,
      }}
    >
      <div className="text-xs font-bold" style={{ color: colors.navy }}>
        {type === "dbg" ? "DBG" : "DBM"}
      </div>
    </div>
    <div className="text-xs mt-1" style={{ color: colors.navy }}>
      {type === "dbg" ? "DBG Logo" : "DBM Logo"}
    </div>
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
        return `JIGYĀSA ANVESHAN ${examResult.examPeriod.toUpperCase()}`
      case "bodha-manthan":
        return `BODHA MANTHAN ${examResult.examPeriod.toUpperCase()}`
      case "pragya-siddhi":
        return `PRAGYA SIDDHI ${examResult.examPeriod.toUpperCase()}`
      default:
        return examResult.examPeriod.toUpperCase()
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen relative">
      {/* Decorative Border */}
      <div
        className="absolute inset-2 border-4 rounded-lg pointer-events-none"
        style={{ borderColor: colors.saffron }}
      />

      {/* Institution Header */}
      <div className="mb-6 mt-4">
        <div className="p-6 rounded-lg" style={{ backgroundColor: colors.headerbg }}>
          <div className="flex items-center justify-between">
            <Logo type="dbg" color={colors.saffron} />

            <div className="text-center flex-1 mx-8">
              <h1 className="text-3xl font-bold mb-2" style={{ color: colors.navy }}>
                DIVYA BIHAR GLOBAL GURUKULAM
              </h1>
              <h2 className="text-xl font-bold mb-2" style={{ color: colors.darkgreen }}>
                (DBG Gurukulam)
              </h2>
              <p className="text-lg mb-1">Raghopur, Supaul, Bihar – 852111</p>
              <p className="mb-1">
                Managed by: <strong>Divya Bihar Mission</strong>
              </p>
              <p className="italic" style={{ color: colors.saffron }}>
                Education with Yogic Values
              </p>
            </div>

            <Logo type="dbm" color={colors.darkgreen} />
          </div>
        </div>
      </div>

      {/* Assessment Title */}
      <div className="mb-6">
        <div
          className="text-center py-4 rounded-lg mx-auto max-w-2xl"
          style={{ backgroundColor: `${colors.saffron}20` }}
        >
          <h2 className="text-xl font-bold mb-2" style={{ color: colors.navy }}>
            {getExamTitle()}
          </h2>
          <h3 className="text-lg font-bold" style={{ color: colors.darkgreen }}>
            Assessment Report
          </h3>
        </div>
      </div>

      {/* Student Information */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <tbody>
            <tr style={{ backgroundColor: colors.lightgray }}>
              <td className="border border-gray-400 p-2 font-bold" style={{ color: colors.navy }}>
                Student Name: {student.name}
              </td>
              <td className="border border-gray-400 p-2 font-bold" style={{ color: colors.navy }}>
                Class: {student.class}
              </td>
              <td className="border border-gray-400 p-2 font-bold" style={{ color: colors.navy }}>
                Roll No: {student.rollNo}
              </td>
              <td className="border border-gray-400 p-2 font-bold" style={{ color: colors.navy }}>
                Period: {examResult.examPeriod}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-400 p-2 font-bold" style={{ color: colors.navy }} colSpan={2}>
                Father's Name: {student.fatherName}
              </td>
              <td className="border border-gray-400 p-2 font-bold" style={{ color: colors.navy }} colSpan={2}>
                Mother's Name: {student.motherName}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Academic Subjects */}
      <div className="mb-6">
        <h3 className="text-center text-lg font-bold mb-3" style={{ color: colors.darkgreen }}>
          ACADEMIC SUBJECTS
        </h3>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr style={{ backgroundColor: `${colors.navy}20` }}>
              <th className="border border-gray-400 p-2 text-white font-bold" style={{ backgroundColor: colors.navy }}>
                Subject
              </th>
              <th className="border border-gray-400 p-2 text-white font-bold" style={{ backgroundColor: colors.navy }}>
                Raw Marks
              </th>
              <th className="border border-gray-400 p-2 text-white font-bold" style={{ backgroundColor: colors.navy }}>
                Total
              </th>
              <th className="border border-gray-400 p-2 text-white font-bold" style={{ backgroundColor: colors.navy }}>
                Scaled Marks
              </th>
              <th className="border border-gray-400 p-2 text-white font-bold" style={{ backgroundColor: colors.navy }}>
                Out of
              </th>
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
            <tr style={{ backgroundColor: `${colors.saffron}20` }}>
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
        <h3 className="text-center text-lg font-bold mb-3" style={{ color: colors.darkgreen }}>
          CO-CURRICULAR & EXTRA-CURRICULAR ACTIVITIES
        </h3>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr style={{ backgroundColor: `${colors.darkgreen}20` }}>
              <th
                className="border border-gray-400 p-2 text-white font-bold"
                style={{ backgroundColor: colors.darkgreen }}
              >
                Activity
              </th>
              <th
                className="border border-gray-400 p-2 text-white font-bold"
                style={{ backgroundColor: colors.darkgreen }}
              >
                Marks
              </th>
              <th
                className="border border-gray-400 p-2 text-white font-bold"
                style={{ backgroundColor: colors.darkgreen }}
              >
                Out of
              </th>
              <th
                className="border border-gray-400 p-2 text-white font-bold"
                style={{ backgroundColor: colors.darkgreen }}
              >
                Activity
              </th>
              <th
                className="border border-gray-400 p-2 text-white font-bold"
                style={{ backgroundColor: colors.darkgreen }}
              >
                Marks
              </th>
              <th
                className="border border-gray-400 p-2 text-white font-bold"
                style={{ backgroundColor: colors.darkgreen }}
              >
                Out of
              </th>
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
            <tr style={{ backgroundColor: `${colors.saffron}20` }}>
              <td className="border border-gray-400 p-2 text-center font-bold" colSpan={6}>
                Co-Curricular Subtotal: {coActivitiesSubtotal} / {coActivitiesTotal}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Performance Summary */}
      <div className="mb-6">
        <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.navy}10` }}>
          <h3 className="text-center text-lg font-bold mb-3" style={{ color: colors.darkgreen }}>
            PERFORMANCE SUMMARY
          </h3>
          <table className="w-4/5 mx-auto border-collapse border border-gray-400">
            <thead>
              <tr style={{ backgroundColor: `${colors.saffron}30` }}>
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

      {/* Remarks Section */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr style={{ backgroundColor: colors.lightgray }}>
              <th className="border border-gray-400 p-2 text-left font-bold">Class Teacher's Remarks:</th>
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
            <tr style={{ backgroundColor: colors.lightgray }}>
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
      <div className="text-center">
        <hr className="w-3/4 mx-auto" style={{ borderColor: colors.saffron, borderWidth: "1px" }} />
      </div>
    </div>
  )
}
