import { class10Math } from "./class-10/math"
import { class10Science } from "./class-10/science"
import { class12Physics } from "./class-12/physics"

export interface QuestionPaperStructure {
  [className: string]: {
    [subject: string]: {
      chapters: any[]
    }
  }
}

export const questionPapers: QuestionPaperStructure = {
  "10": {
    Math: {
      chapters: class10Math,
    },
    Science: {
      chapters: class10Science,
    },
  },
  "12": {
    Physics: {
      chapters: class12Physics,
    },
  },
}

export { ObjectiveQuestion, ShortAnswerQuestion, LongAnswerQuestion, QuestionSet, Chapter } from "./class-10/math"
