export interface OptionType {
  _id: string;
  description: string;
  value: string | number | any;
  name: string;
}

export interface QuestionType {
  _id: string;
  description: string;
  questionType: "checkbox" | "date" | "selection" | "radio" | "selectionskill";
  name: string;
  options: OptionType[];
  skills?: { _id: string; name: string }[];
}

export interface QuestionSectionType {
  section: string;
  questions: QuestionType[];
}

export interface AnswerType {
  _id: string;
  questionType: string;
  options: {
    _id: string;
    value?: string;
    skillId?: string;
    skillName?: string;
  }[];
}

export interface QuestionDataType {
  Talent: QuestionSectionType[];
  Company: QuestionSectionType[];
  Investor: QuestionSectionType[];
}
