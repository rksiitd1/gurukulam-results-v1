export interface StudentData {
  id: string
  name: string
  class: string
  rollNo: string
  fatherName: string
  motherName: string
  academicYear: string // When they got registered
}

export interface ExamResult {
  studentId: string
  examType: "jigyasa-anveshan" | "bodha-manthan" | "pragya-siddhi"
  examPeriod: string
  academicYear: string
  academicMarks: {
    subject: string
    rawMarks: number
    total: number
    scaledMarks: number
    outOf: number
  }[]
  coActivities: {
    activity: string
    marks: number
    outOf: number
  }[]
  totalMarks: number
  maxMarks: number
  percentage: number
  grade: string
  remarks?: string
}

export const academicYears = ["2025-26", "2024-25"]

export const classes = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]

// Students registered in 2024-25
export const students: StudentData[] = [
  // Class 1st
  {
    id: "dbg-001",
    name: "Aarav Kumar",
    class: "1st",
    rollNo: "01",
    fatherName: "Ramesh Kumar",
    motherName: "Sunita Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-002",
    name: "Ananya Sharma",
    class: "1st",
    rollNo: "02",
    fatherName: "Suresh Sharma",
    motherName: "Priya Devi",
    academicYear: "2024-25",
  },

  // Class 2nd
  {
    id: "dbg-003",
    name: "Arjun Singh",
    class: "2nd",
    rollNo: "01",
    fatherName: "Manoj Singh",
    motherName: "Kavita Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-004",
    name: "Riya Kumari",
    class: "2nd",
    rollNo: "02",
    fatherName: "Santosh Kumar",
    motherName: "Meera Devi",
    academicYear: "2024-25",
  },

  // Class 3rd
  {
    id: "dbg-005",
    name: "Vihaan Gupta",
    class: "3rd",
    rollNo: "01",
    fatherName: "Rajesh Gupta",
    motherName: "Sita Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-006",
    name: "Diya Yadav",
    class: "3rd",
    rollNo: "02",
    fatherName: "Dinesh Yadav",
    motherName: "Gita Devi",
    academicYear: "2024-25",
  },

  // Class 4th
  {
    id: "dbg-007",
    name: "Shivansh Mishra",
    class: "4th",
    rollNo: "01",
    fatherName: "Mukesh Mishra",
    motherName: "Rita Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-008",
    name: "Pihu Pandey",
    class: "4th",
    rollNo: "02",
    fatherName: "Naresh Pandey",
    motherName: "Anita Devi",
    academicYear: "2024-25",
  },

  // Class 5th
  {
    id: "dbg-009",
    name: "Aditya Tiwari",
    class: "5th",
    rollNo: "01",
    fatherName: "Rakesh Tiwari",
    motherName: "Lalita Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-010",
    name: "Kavya Jha",
    class: "5th",
    rollNo: "02",
    fatherName: "Shyam Jha",
    motherName: "Mamta Devi",
    academicYear: "2024-25",
  },

  // Class 6th
  {
    id: "dbg-011",
    name: "Reyansh Thakur",
    class: "6th",
    rollNo: "01",
    fatherName: "Mahesh Thakur",
    motherName: "Shanti Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-012",
    name: "Prisha Verma",
    class: "6th",
    rollNo: "02",
    fatherName: "Sunil Verma",
    motherName: "Kavita Devi",
    academicYear: "2024-25",
  },

  // Class 7th
  {
    id: "dbg-013",
    name: "Ayaan Sinha",
    class: "7th",
    rollNo: "01",
    fatherName: "Ravi Sinha",
    motherName: "Pooja Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-014",
    name: "Myra Prasad",
    class: "7th",
    rollNo: "02",
    fatherName: "Anil Prasad",
    motherName: "Rekha Devi",
    academicYear: "2024-25",
  },

  // Class 8th
  {
    id: "dbg-015",
    name: "Krishna Roy",
    class: "8th",
    rollNo: "01",
    fatherName: "Gopal Roy",
    motherName: "Radha Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-016",
    name: "Saanvi Das",
    class: "8th",
    rollNo: "02",
    fatherName: "Bijoy Das",
    motherName: "Mala Devi",
    academicYear: "2024-25",
  },

  // Class 9th
  {
    id: "dbg-017",
    name: "Ishaan Chaudhary",
    class: "9th",
    rollNo: "01",
    fatherName: "Vinod Chaudhary",
    motherName: "Usha Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-018",
    name: "Aanya Raj",
    class: "9th",
    rollNo: "02",
    fatherName: "Deepak Raj",
    motherName: "Nisha Devi",
    academicYear: "2024-25",
  },

  // Class 10th
  {
    id: "dbg-019",
    name: "Shaurya Ranjan",
    class: "10th",
    rollNo: "01",
    fatherName: "Ashok Ranjan",
    motherName: "Seema Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-020",
    name: "Navya Singh",
    class: "10th",
    rollNo: "02",
    fatherName: "Pankaj Singh",
    motherName: "Sunita Devi",
    academicYear: "2024-25",
  },

  // Class 11th
  {
    id: "dbg-021",
    name: "Atharv Sharma",
    class: "11th",
    rollNo: "01",
    fatherName: "Mohan Sharma",
    motherName: "Kiran Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-022",
    name: "Pari Gupta",
    class: "11th",
    rollNo: "02",
    fatherName: "Sanjay Gupta",
    motherName: "Asha Devi",
    academicYear: "2024-25",
  },

  // Class 12th
  {
    id: "dbg-023",
    name: "Advik Kumar",
    class: "12th",
    rollNo: "01",
    fatherName: "Ramesh Kumar",
    motherName: "Geeta Devi",
    academicYear: "2024-25",
  },
  {
    id: "dbg-024",
    name: "Avni Yadav",
    class: "12th",
    rollNo: "02",
    fatherName: "Suresh Yadav",
    motherName: "Meena Devi",
    academicYear: "2024-25",
  },
]

// Exam Results
export const examResults: ExamResult[] = [
  // 2024-25 Academic Year Results

  // Aarav Kumar (dbg-001) - Class 1st
  // Jigyāsa Anveshan I - April 2024
  {
    studentId: "dbg-001",
    examType: "jigyasa-anveshan",
    examPeriod: "I - April 2024",
    academicYear: "2024-25",
    academicMarks: [
      { subject: "Hindi", rawMarks: 45, total: 50, scaledMarks: 9.0, outOf: 10 },
      { subject: "English", rawMarks: 42, total: 50, scaledMarks: 8.4, outOf: 10 },
      { subject: "Science", rawMarks: 48, total: 50, scaledMarks: 9.6, outOf: 10 },
      { subject: "Social Science", rawMarks: 44, total: 50, scaledMarks: 8.8, outOf: 10 },
      { subject: "Mathematics", rawMarks: 49, total: 50, scaledMarks: 9.8, outOf: 10 },
      { subject: "Reasoning", rawMarks: 40, total: 50, scaledMarks: 8.0, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 5, outOf: 5 },
      { activity: "Project Work", marks: 4, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 5, outOf: 5 },
      { activity: "Class Participation", marks: 4, outOf: 5 },
      { activity: "Arts / Painting", marks: 4, outOf: 5 },
      { activity: "Oral Performance", marks: 5, outOf: 5 },
      { activity: "Fair Copy", marks: 5, outOf: 5 },
    ],
    totalMarks: 90.6,
    maxMarks: 100,
    percentage: 90.6,
    grade: "Excellent",
  },

  // Aarav Kumar (dbg-001) - Jigyāsa Anveshan II - May 2024
  {
    studentId: "dbg-001",
    examType: "jigyasa-anveshan",
    examPeriod: "II - May 2024",
    academicYear: "2024-25",
    academicMarks: [
      { subject: "Hindi", rawMarks: 46, total: 50, scaledMarks: 9.2, outOf: 10 },
      { subject: "English", rawMarks: 44, total: 50, scaledMarks: 8.8, outOf: 10 },
      { subject: "Science", rawMarks: 47, total: 50, scaledMarks: 9.4, outOf: 10 },
      { subject: "Social Science", rawMarks: 45, total: 50, scaledMarks: 9.0, outOf: 10 },
      { subject: "Mathematics", rawMarks: 48, total: 50, scaledMarks: 9.6, outOf: 10 },
      { subject: "Reasoning", rawMarks: 42, total: 50, scaledMarks: 8.4, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 5, outOf: 5 },
      { activity: "Project Work", marks: 4, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 5, outOf: 5 },
      { activity: "Class Participation", marks: 5, outOf: 5 },
      { activity: "Arts / Painting", marks: 4, outOf: 5 },
      { activity: "Oral Performance", marks: 5, outOf: 5 },
      { activity: "Fair Copy", marks: 5, outOf: 5 },
    ],
    totalMarks: 92.4,
    maxMarks: 100,
    percentage: 92.4,
    grade: "Excellent",
  },

  // Aarav Kumar (dbg-001) - Jigyāsa Anveshan III - June 2024
  {
    studentId: "dbg-001",
    examType: "jigyasa-anveshan",
    examPeriod: "III - June 2024",
    academicYear: "2024-25",
    academicMarks: [
      { subject: "Hindi", rawMarks: 47, total: 50, scaledMarks: 9.4, outOf: 10 },
      { subject: "English", rawMarks: 45, total: 50, scaledMarks: 9.0, outOf: 10 },
      { subject: "Science", rawMarks: 49, total: 50, scaledMarks: 9.8, outOf: 10 },
      { subject: "Social Science", rawMarks: 46, total: 50, scaledMarks: 9.2, outOf: 10 },
      { subject: "Mathematics", rawMarks: 50, total: 50, scaledMarks: 10.0, outOf: 10 },
      { subject: "Reasoning", rawMarks: 43, total: 50, scaledMarks: 8.6, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 5, outOf: 5 },
      { activity: "Project Work", marks: 5, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 5, outOf: 5 },
      { activity: "Class Participation", marks: 5, outOf: 5 },
      { activity: "Arts / Painting", marks: 5, outOf: 5 },
      { activity: "Oral Performance", marks: 5, outOf: 5 },
      { activity: "Fair Copy", marks: 5, outOf: 5 },
    ],
    totalMarks: 96.0,
    maxMarks: 100,
    percentage: 96.0,
    grade: "Outstanding",
  },

  // Aarav Kumar (dbg-001) - Bodha Manthan Mid-term - September 2024
  {
    studentId: "dbg-001",
    examType: "bodha-manthan",
    examPeriod: "Mid-term - September 2024",
    academicYear: "2024-25",
    academicMarks: [
      { subject: "Hindi", rawMarks: 48, total: 50, scaledMarks: 9.6, outOf: 10 },
      { subject: "English", rawMarks: 46, total: 50, scaledMarks: 9.2, outOf: 10 },
      { subject: "Science", rawMarks: 49, total: 50, scaledMarks: 9.8, outOf: 10 },
      { subject: "Social Science", rawMarks: 47, total: 50, scaledMarks: 9.4, outOf: 10 },
      { subject: "Mathematics", rawMarks: 50, total: 50, scaledMarks: 10.0, outOf: 10 },
      { subject: "Reasoning", rawMarks: 45, total: 50, scaledMarks: 9.0, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 5, outOf: 5 },
      { activity: "Project Work", marks: 5, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 5, outOf: 5 },
      { activity: "Class Participation", marks: 5, outOf: 5 },
      { activity: "Arts / Painting", marks: 5, outOf: 5 },
      { activity: "Oral Performance", marks: 5, outOf: 5 },
      { activity: "Fair Copy", marks: 5, outOf: 5 },
    ],
    totalMarks: 97.0,
    maxMarks: 100,
    percentage: 97.0,
    grade: "Outstanding",
  },

  // Ananya Sharma (dbg-002) - Class 1st
  // Jigyāsa Anveshan I - April 2024
  {
    studentId: "dbg-002",
    examType: "jigyasa-anveshan",
    examPeriod: "I - April 2024",
    academicYear: "2024-25",
    academicMarks: [
      { subject: "Hindi", rawMarks: 42, total: 50, scaledMarks: 8.4, outOf: 10 },
      { subject: "English", rawMarks: 40, total: 50, scaledMarks: 8.0, outOf: 10 },
      { subject: "Science", rawMarks: 44, total: 50, scaledMarks: 8.8, outOf: 10 },
      { subject: "Social Science", rawMarks: 41, total: 50, scaledMarks: 8.2, outOf: 10 },
      { subject: "Mathematics", rawMarks: 45, total: 50, scaledMarks: 9.0, outOf: 10 },
      { subject: "Reasoning", rawMarks: 38, total: 50, scaledMarks: 7.6, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 4, outOf: 5 },
      { activity: "Project Work", marks: 4, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 4, outOf: 5 },
      { activity: "Class Participation", marks: 4, outOf: 5 },
      { activity: "Arts / Painting", marks: 5, outOf: 5 },
      { activity: "Oral Performance", marks: 4, outOf: 5 },
      { activity: "Fair Copy", marks: 4, outOf: 5 },
    ],
    totalMarks: 84.0,
    maxMarks: 100,
    percentage: 84.0,
    grade: "Commendable",
  },

  // Shivansh Mishra (dbg-007) - Class 4th
  // Jigyāsa Anveshan III - June 2024
  {
    studentId: "dbg-007",
    examType: "jigyasa-anveshan",
    examPeriod: "III - June 2024",
    academicYear: "2024-25",
    academicMarks: [
      { subject: "Hindi", rawMarks: 42, total: 50, scaledMarks: 8.4, outOf: 10 },
      { subject: "English", rawMarks: 38, total: 50, scaledMarks: 7.6, outOf: 10 },
      { subject: "Science", rawMarks: 45, total: 50, scaledMarks: 9.0, outOf: 10 },
      { subject: "Social Science", rawMarks: 40, total: 50, scaledMarks: 8.0, outOf: 10 },
      { subject: "Mathematics", rawMarks: 48, total: 50, scaledMarks: 9.6, outOf: 10 },
      { subject: "Reasoning", rawMarks: 35, total: 50, scaledMarks: 7.0, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 4, outOf: 5 },
      { activity: "Project Work", marks: 3, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 5, outOf: 5 },
      { activity: "Class Participation", marks: 4, outOf: 5 },
      { activity: "Arts / Painting", marks: 4, outOf: 5 },
      { activity: "Oral Performance", marks: 4, outOf: 5 },
      { activity: "Fair Copy", marks: 5, outOf: 5 },
    ],
    totalMarks: 83.6,
    maxMarks: 100,
    percentage: 83.6,
    grade: "Commendable",
  },

  // 2025-26 Academic Year Results

  // Aarav Kumar (dbg-001) - Jigyāsa Anveshan I - April 2025
  {
    studentId: "dbg-001",
    examType: "jigyasa-anveshan",
    examPeriod: "I - April 2025",
    academicYear: "2025-26",
    academicMarks: [
      { subject: "Hindi", rawMarks: 48, total: 50, scaledMarks: 9.6, outOf: 10 },
      { subject: "English", rawMarks: 47, total: 50, scaledMarks: 9.4, outOf: 10 },
      { subject: "Science", rawMarks: 49, total: 50, scaledMarks: 9.8, outOf: 10 },
      { subject: "Social Science", rawMarks: 48, total: 50, scaledMarks: 9.6, outOf: 10 },
      { subject: "Mathematics", rawMarks: 50, total: 50, scaledMarks: 10.0, outOf: 10 },
      { subject: "Reasoning", rawMarks: 46, total: 50, scaledMarks: 9.2, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 5, outOf: 5 },
      { activity: "Project Work", marks: 5, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 5, outOf: 5 },
      { activity: "Class Participation", marks: 5, outOf: 5 },
      { activity: "Arts / Painting", marks: 5, outOf: 5 },
      { activity: "Oral Performance", marks: 5, outOf: 5 },
      { activity: "Fair Copy", marks: 5, outOf: 5 },
    ],
    totalMarks: 97.6,
    maxMarks: 100,
    percentage: 97.6,
    grade: "Outstanding",
  },

  // Shivansh Mishra (dbg-007) - Jigyāsa Anveshan I - April 2025
  {
    studentId: "dbg-007",
    examType: "jigyasa-anveshan",
    examPeriod: "I - April 2025",
    academicYear: "2025-26",
    academicMarks: [
      { subject: "Hindi", rawMarks: 44, total: 50, scaledMarks: 8.8, outOf: 10 },
      { subject: "English", rawMarks: 41, total: 50, scaledMarks: 8.2, outOf: 10 },
      { subject: "Science", rawMarks: 46, total: 50, scaledMarks: 9.2, outOf: 10 },
      { subject: "Social Science", rawMarks: 43, total: 50, scaledMarks: 8.6, outOf: 10 },
      { subject: "Mathematics", rawMarks: 49, total: 50, scaledMarks: 9.8, outOf: 10 },
      { subject: "Reasoning", rawMarks: 38, total: 50, scaledMarks: 7.6, outOf: 10 },
    ],
    coActivities: [
      { activity: "Discipline", marks: 4, outOf: 5 },
      { activity: "Project Work", marks: 4, outOf: 5 },
      { activity: "Attendance", marks: 5, outOf: 5 },
      { activity: "Yoga", marks: 5, outOf: 5 },
      { activity: "Class Participation", marks: 4, outOf: 5 },
      { activity: "Arts / Painting", marks: 4, outOf: 5 },
      { activity: "Oral Performance", marks: 4, outOf: 5 },
      { activity: "Fair Copy", marks: 5, outOf: 5 },
    ],
    totalMarks: 87.2,
    maxMarks: 100,
    percentage: 87.2,
    grade: "Excellent",
  },
]

// Question paper data structure (sample)
export const questionPapers = {
  "12": {
    Physics: {
      chapters: [
        {
          name: "Electrostatics",
          sets: [
            {
              set: 1,
              questions: [
                {
                  number: 1,
                  text: "Define electric field. State and explain Gauss's law.",
                  marks: 5
                },
                {
                  number: 2,
                  text: "A point charge of 2μC is placed at the origin. Calculate the electric field at a point 10cm away.",
                  marks: 3
                },
                {
                  number: 3,
                  text: "Explain the concept of electric flux with a diagram.",
                  marks: 2
                }
              ]
            }
          ]
        }
      ]
    }
  },
  "10": {
    Math: {
      chapters: [
        {
          name: "Real Numbers",
          sets: [
            {
              set: 1,
              questions: [
                {
                  number: 1,
                  text: "State Euclid's division lemma. Use it to find the HCF of 56 and 72.",
                  marks: 4
                },
                {
                  number: 2,
                  text: "Prove that \u221A2 is an irrational number.",
                  marks: 3
                },
                {
                  number: 3,
                  text: "If the HCF of 65 and 117 is expressible in the form 65m - 117n, find the value of m and n.",
                  marks: 3
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

export const examTypes = {
  "jigyasa-anveshan": "Jigyāsa Anveshan (Monthly)",
  "bodha-manthan": "Bodha Manthan (Term-End)",
  "pragya-siddhi": "Pragya Siddhi (Annual)",
}

export function findStudent(className: string, rollNo: string, name: string): StudentData | null {
  const student = students.find(
    (s) => s.class === className && s.rollNo === rollNo && s.name.toLowerCase() === name.toLowerCase(),
  )
  return student || null
}

export function getExamResult(
  studentId: string,
  examType: string,
  examPeriod: string,
  academicYear?: string,
): ExamResult | undefined {
  return examResults.find(
    (result) =>
      result.studentId === studentId &&
      result.examType === examType &&
      result.examPeriod === examPeriod &&
      (academicYear ? result.academicYear === academicYear : true),
  )
}

export function getStudentById(studentId: string): StudentData | undefined {
  return students.find((student) => student.id === studentId)
}

export function getStudentResults(studentId: string): ExamResult[] {
  return examResults.filter((result) => result.studentId === studentId)
}

export function getAvailableExamPeriods(academicYear: string, examType: string): string[] {
  const periods = examResults
    .filter((result) => result.academicYear === academicYear && result.examType === examType)
    .map((result) => result.examPeriod)

  return [...new Set(periods)].sort()
}

export function getClassStats(className: string): {
  totalStudents: number
  totalResults: number
} {
  const classStudents = students.filter((s) => s.class === className)
  const classResults = examResults.filter((r) => classStudents.some((s) => s.id === r.studentId))

  return {
    totalStudents: classStudents.length,
    totalResults: classResults.length,
  }
}
