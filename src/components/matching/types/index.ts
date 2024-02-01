import { MouseEventHandler } from "react";

export interface PopupProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
}

export interface ChartProps {
  percentage: number;
  color: string;
}

export interface SkillsProps {
  color: string;
  title: string;
}

export interface MatchingDataType {
  percentage: number;
  name: string;
  total: number;
  skills: {
    id: number;
    description: string;
    subskills: { id: number; description: string }[];
  }[];
}
