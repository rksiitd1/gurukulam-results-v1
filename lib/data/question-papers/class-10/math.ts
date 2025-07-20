export interface ObjectiveQuestion {
  number: number
  text: string
  options: {
    a: string
    b: string
    c: string
    d: string
  }
  marks: number
}

export interface ShortAnswerQuestion {
  number: number
  text: string
  marks: number
}

export interface LongAnswerQuestion {
  number: number
  text: string
  orQuestion?: string
  marks: number
}

export interface QuestionSet {
  set: number
  objectiveQuestions: ObjectiveQuestion[]
  shortAnswerQuestions: ShortAnswerQuestion[]
  longAnswerQuestions: LongAnswerQuestion[]
}

export interface Chapter {
  name: string
  sets: QuestionSet[]
}

export const class10Math: Chapter[] = [
  {
    name: "Real Numbers",
    sets: [
      {
        set: 1,
        objectiveQuestions: [
          {
            number: 1,
            text: "The HCF of 12 and 18 is:",
            options: {
              a: "2",
              b: "3",
              c: "6",
              d: "9",
            },
            marks: 1,
          },
          {
            number: 2,
            text: "Which of the following is an irrational number?",
            options: {
              a: "√4",
              b: "√9",
              c: "√2",
              d: "√16",
            },
            marks: 1,
          },
          {
            number: 3,
            text: "The decimal expansion of 22/7 is:",
            options: {
              a: "Terminating",
              b: "Non-terminating repeating",
              c: "Non-terminating non-repeating",
              d: "None of these",
            },
            marks: 1,
          },
          {
            number: 4,
            text: "If HCF(a,b) = 1, then LCM(a,b) equals:",
            options: {
              a: "a + b",
              b: "a - b",
              c: "a × b",
              d: "a ÷ b",
            },
            marks: 1,
          },
          {
            number: 5,
            text: "The number 0.318318318... can be expressed as:",
            options: {
              a: "318/1000",
              b: "318/999",
              c: "318/100",
              d: "318/900",
            },
            marks: 1,
          },
          {
            number: 6,
            text: "Which of the following is a rational number?",
            options: {
              a: "π",
              b: "√3",
              c: "2.5",
              d: "√5",
            },
            marks: 1,
          },
          {
            number: 7,
            text: "The LCM of 15 and 25 is:",
            options: {
              a: "5",
              b: "75",
              c: "375",
              d: "125",
            },
            marks: 1,
          },
          {
            number: 8,
            text: "If p and q are co-prime numbers, then HCF(p,q) is:",
            options: {
              a: "p",
              b: "q",
              c: "1",
              d: "pq",
            },
            marks: 1,
          },
          {
            number: 9,
            text: "The number 2.010010001... is:",
            options: {
              a: "Rational",
              b: "Irrational",
              c: "Integer",
              d: "Natural",
            },
            marks: 1,
          },
          {
            number: 10,
            text: "Which of the following has a terminating decimal expansion?",
            options: {
              a: "1/3",
              b: "1/7",
              c: "1/8",
              d: "1/9",
            },
            marks: 1,
          },
          {
            number: 11,
            text: "The prime factorization of 60 is:",
            options: {
              a: "2² × 3 × 5",
              b: "2 × 3² × 5",
              c: "2³ × 3 × 5",
              d: "2² × 3² × 5",
            },
            marks: 1,
          },
          {
            number: 12,
            text: "If √2 = 1.414, then √8 equals:",
            options: {
              a: "2.828",
              b: "5.656",
              c: "1.414",
              d: "4.242",
            },
            marks: 1,
          },
          {
            number: 13,
            text: "The smallest composite number is:",
            options: {
              a: "2",
              b: "3",
              c: "4",
              d: "6",
            },
            marks: 1,
          },
          {
            number: 14,
            text: "HCF of 26 and 91 is:",
            options: {
              a: "13",
              b: "26",
              c: "91",
              d: "1",
            },
            marks: 1,
          },
          {
            number: 15,
            text: "The number 0.75 can be written as:",
            options: {
              a: "3/4",
              b: "75/100",
              c: "Both a and b",
              d: "None of these",
            },
            marks: 1,
          },
          {
            number: 16,
            text: "Which of the following is true for irrational numbers?",
            options: {
              a: "They can be expressed as p/q",
              b: "They have terminating decimal expansion",
              c: "They have non-terminating non-repeating decimal expansion",
              d: "They are always negative",
            },
            marks: 1,
          },
          {
            number: 17,
            text: "The LCM of two co-prime numbers is:",
            options: {
              a: "1",
              b: "Their sum",
              c: "Their product",
              d: "Their difference",
            },
            marks: 1,
          },
          {
            number: 18,
            text: "If a = 2³ × 3² and b = 2² × 3³, then HCF(a,b) is:",
            options: {
              a: "2² × 3²",
              b: "2³ × 3³",
              c: "2² × 3³",
              d: "2³ × 3²",
            },
            marks: 1,
          },
          {
            number: 19,
            text: "The rational number between 1/3 and 1/2 is:",
            options: {
              a: "2/5",
              b: "3/7",
              c: "5/12",
              d: "All of these",
            },
            marks: 1,
          },
          {
            number: 20,
            text: "√12 can be simplified as:",
            options: {
              a: "2√3",
              b: "3√2",
              c: "4√3",
              d: "6√2",
            },
            marks: 1,
          },
          {
            number: 21,
            text: "The number 1.010010001... is:",
            options: {
              a: "Rational",
              b: "Irrational",
              c: "Integer",
              d: "Whole number",
            },
            marks: 1,
          },
          {
            number: 22,
            text: "If HCF(a,b) = 12 and LCM(a,b) = 180, and a = 36, then b is:",
            options: {
              a: "60",
              b: "45",
              c: "72",
              d: "90",
            },
            marks: 1,
          },
          {
            number: 23,
            text: "The decimal expansion of 7/8 is:",
            options: {
              a: "0.875",
              b: "0.785",
              c: "0.758",
              d: "0.857",
            },
            marks: 1,
          },
          {
            number: 24,
            text: "Which of the following is always irrational?",
            options: {
              a: "Sum of two rationals",
              b: "Product of two rationals",
              c: "Sum of rational and irrational",
              d: "Product of two irrationals",
            },
            marks: 1,
          },
          {
            number: 25,
            text: "The value of (√2 + √3)² is:",
            options: {
              a: "5 + 2√6",
              b: "5 + √6",
              c: "2 + 3",
              d: "√5",
            },
            marks: 1,
          },
        ],
        shortAnswerQuestions: [
          {
            number: 26,
            text: "Find the HCF of 96 and 404 using Euclid's division algorithm.",
            marks: 2,
          },
          {
            number: 27,
            text: "Express 0.6̄ in the form p/q where p and q are integers and q ≠ 0.",
            marks: 2,
          },
          {
            number: 28,
            text: "Show that 5 - √3 is an irrational number.",
            marks: 2,
          },
          {
            number: 29,
            text: "Find the LCM and HCF of 6 and 20 by prime factorization method.",
            marks: 2,
          },
          {
            number: 30,
            text: "Simplify: √48 + √75 - √27",
            marks: 2,
          },
          {
            number: 31,
            text: "If the HCF of 65 and 117 is expressible in the form 65m - 117n, find the values of m and n.",
            marks: 2,
          },
          {
            number: 32,
            text: "Prove that √5 is an irrational number.",
            marks: 2,
          },
          {
            number: 33,
            text: "Find three rational numbers between 3/5 and 4/5.",
            marks: 2,
          },
          {
            number: 34,
            text: "Express 2.54̄ in the form p/q.",
            marks: 2,
          },
          {
            number: 35,
            text: "Find the largest number that divides 70 and 125, leaving remainders 5 and 8 respectively.",
            marks: 2,
          },
        ],
        longAnswerQuestions: [
          {
            number: 36,
            text: "Prove that √2 is an irrational number. Hence show that 3 + 2√2 is also an irrational number.",
            orQuestion:
              "Use Euclid's division lemma to show that the square of any positive integer is either of the form 3m or 3m + 1 for some integer m.",
            marks: 5,
          },
        ],
      },
    ],
  },
  {
    name: "Polynomials",
    sets: [
      {
        set: 1,
        objectiveQuestions: [
          {
            number: 1,
            text: "The degree of polynomial 3x⁴ + 2x³ - x + 5 is:",
            options: {
              a: "3",
              b: "4",
              c: "5",
              d: "1",
            },
            marks: 1,
          },
          {
            number: 2,
            text: "If p(x) = x² - 2x + 1, then p(2) equals:",
            options: {
              a: "1",
              b: "3",
              c: "5",
              d: "0",
            },
            marks: 1,
          },
          {
            number: 3,
            text: "The zero of polynomial 2x + 3 is:",
            options: {
              a: "3/2",
              b: "-3/2",
              c: "2/3",
              d: "-2/3",
            },
            marks: 1,
          },
          {
            number: 4,
            text: "If α and β are zeros of x² - 5x + 6, then α + β equals:",
            options: {
              a: "5",
              b: "6",
              c: "-5",
              d: "-6",
            },
            marks: 1,
          },
          {
            number: 5,
            text: "The number of zeros of polynomial p(x) = (x-2)²(x+1) is:",
            options: {
              a: "1",
              b: "2",
              c: "3",
              d: "4",
            },
            marks: 1,
          },
          {
            number: 6,
            text: "If one zero of polynomial 2x² + 3x + k is 1/2, then k equals:",
            options: {
              a: "2",
              b: "-2",
              c: "4",
              d: "-4",
            },
            marks: 1,
          },
          {
            number: 7,
            text: "The polynomial x³ - 1 can be factored as:",
            options: {
              a: "(x-1)(x²+x+1)",
              b: "(x+1)(x²-x+1)",
              c: "(x-1)(x²-x+1)",
              d: "(x+1)(x²+x+1)",
            },
            marks: 1,
          },
          {
            number: 8,
            text: "If p(x) = x² - 4x + 3, then p(1) + p(3) equals:",
            options: {
              a: "0",
              b: "2",
              c: "4",
              d: "6",
            },
            marks: 1,
          },
          {
            number: 9,
            text: "The coefficient of x in the expansion of (x+2)³ is:",
            options: {
              a: "6",
              b: "12",
              c: "8",
              d: "4",
            },
            marks: 1,
          },
          {
            number: 10,
            text: "If α, β are zeros of x² - px + q, then α² + β² equals:",
            options: {
              a: "p² - 2q",
              b: "p² + 2q",
              c: "p + q",
              d: "p - q",
            },
            marks: 1,
          },
          {
            number: 11,
            text: "The remainder when x³ - 2x² + x + 2 is divided by (x-1) is:",
            options: {
              a: "0",
              b: "1",
              c: "2",
              d: "3",
            },
            marks: 1,
          },
          {
            number: 12,
            text: "If x + 1 is a factor of x³ + ax² + 2x + a, then a equals:",
            options: {
              a: "1",
              b: "-1",
              c: "2",
              d: "-2",
            },
            marks: 1,
          },
          {
            number: 13,
            text: "The polynomial whose zeros are 2 and -3 is:",
            options: {
              a: "x² + x - 6",
              b: "x² - x - 6",
              c: "x² + x + 6",
              d: "x² - x + 6",
            },
            marks: 1,
          },
          {
            number: 14,
            text: "If p(x) = x² - 3x + 2, then the zeros are:",
            options: {
              a: "1, 2",
              b: "-1, -2",
              c: "1, -2",
              d: "-1, 2",
            },
            marks: 1,
          },
          {
            number: 15,
            text: "The value of k for which x² + 2x + k has equal roots is:",
            options: {
              a: "1",
              b: "2",
              c: "4",
              d: "0",
            },
            marks: 1,
          },
          {
            number: 16,
            text: "If α and β are zeros of 3x² - 7x + 2, then αβ equals:",
            options: {
              a: "7/3",
              b: "2/3",
              c: "-7/3",
              d: "-2/3",
            },
            marks: 1,
          },
          {
            number: 17,
            text: "The polynomial x⁴ - 1 can be factored as:",
            options: {
              a: "(x²-1)(x²+1)",
              b: "(x-1)(x+1)(x²+1)",
              c: "(x-1)(x³+x²+x+1)",
              d: "Both a and b",
            },
            marks: 1,
          },
          {
            number: 18,
            text: "If p(x) = x³ - 6x² + 11x - 6, then p(1) equals:",
            options: {
              a: "0",
              b: "1",
              c: "-1",
              d: "6",
            },
            marks: 1,
          },
          {
            number: 19,
            text: "The quotient when x³ - 3x² + 3x - 1 is divided by (x-1) is:",
            options: {
              a: "x² - 2x + 1",
              b: "x² + 2x + 1",
              c: "x² - 2x - 1",
              d: "x² + 2x - 1",
            },
            marks: 1,
          },
          {
            number: 20,
            text: "If one zero of x² + 4x + k is -1, then the other zero is:",
            options: {
              a: "-3",
              b: "3",
              c: "-5",
              d: "5",
            },
            marks: 1,
          },
          {
            number: 21,
            text: "The sum of zeros of polynomial ax² + bx + c is:",
            options: {
              a: "-b/a",
              b: "b/a",
              c: "c/a",
              d: "-c/a",
            },
            marks: 1,
          },
          {
            number: 22,
            text: "If α, β, γ are zeros of x³ - 6x² + 11x - 6, then α + β + γ equals:",
            options: {
              a: "6",
              b: "-6",
              c: "11",
              d: "-11",
            },
            marks: 1,
          },
          {
            number: 23,
            text: "The polynomial 2x² - 3x + 1 can be factored as:",
            options: {
              a: "(2x-1)(x-1)",
              b: "(2x+1)(x-1)",
              c: "(2x-1)(x+1)",
              d: "(x-1)(2x+1)",
            },
            marks: 1,
          },
          {
            number: 24,
            text: "If p(x) = x² + px + q has zeros α and β, then p + q equals:",
            options: {
              a: "α + β + αβ",
              b: "α + β - αβ",
              c: "αβ - α - β",
              d: "α - β + αβ",
            },
            marks: 1,
          },
          {
            number: 25,
            text: "The degree of zero polynomial is:",
            options: {
              a: "0",
              b: "1",
              c: "Undefined",
              d: "∞",
            },
            marks: 1,
          },
        ],
        shortAnswerQuestions: [
          {
            number: 26,
            text: "Find the zeros of the polynomial x² + 7x + 10 and verify the relationship between zeros and coefficients.",
            marks: 2,
          },
          {
            number: 27,
            text: "If α and β are zeros of polynomial 2x² - 4x + 5, find the value of α² + β².",
            marks: 2,
          },
          {
            number: 28,
            text: "Find the value of k for which the polynomial x² - 3x + k has sum of zeros equal to half of their product.",
            marks: 2,
          },
          {
            number: 29,
            text: "Divide the polynomial 3x³ - x² + 2x + 5 by polynomial x² + 2x + 1.",
            marks: 2,
          },
          {
            number: 30,
            text: "Find a quadratic polynomial whose zeros are 2 + √3 and 2 - √3.",
            marks: 2,
          },
          {
            number: 31,
            text: "If one zero of polynomial (a² + 9)x² + 13x + 6a is reciprocal of the other, find the value of a.",
            marks: 2,
          },
          {
            number: 32,
            text: "Find the remainder when x³ + 3x² + 3x + 1 is divided by x + π.",
            marks: 2,
          },
          {
            number: 33,
            text: "If α, β are zeros of x² - 6x + a and 3α + 2β = 20, find the value of a.",
            marks: 2,
          },
          {
            number: 34,
            text: "Factorize: x³ - 23x² + 142x - 120",
            marks: 2,
          },
          {
            number: 35,
            text: "Find the zeros of polynomial p(x) = x² - 5x + 6 and verify that sum of zeros = -coefficient of x/coefficient of x².",
            marks: 2,
          },
        ],
        longAnswerQuestions: [
          {
            number: 36,
            text: "If α and β are the zeros of the quadratic polynomial f(x) = x² - px + q, then find a quadratic polynomial whose zeros are (α + β)² and (α - β)².",
            orQuestion:
              "Divide the polynomial x⁴ - 3x² + 2x + 5 by the polynomial x² - x + 1 and verify the division algorithm.",
            marks: 5,
          },
        ],
      },
    ],
  },
]
