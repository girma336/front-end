export interface SubSkillType {
  _id: number;
  name: string;
}

export interface SkillType {
  _id: number;
  name: string;
  color: string;
  icon: string;
  subSkills: SubSkillType[];
}

export interface SelectedSkillsType {
  _id: number;
  name: string;
  color: string;
  icon: string;
  subSkills: {
    primary: SubSkillType[];
    other: SubSkillType[];
  };
}

export interface SelectedSubSkillType {
  primary: SubSkillType[];
  other: SubSkillType[];
}

export interface SkillApiDataType {
  _id: number;
  name: string;
  color: string;
  icon: string;
  subSkills: { _id: number; name: string }[];
}
