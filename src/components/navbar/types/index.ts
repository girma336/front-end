interface UserSubSkillType {
  id: number;
  description: string;
}

interface UserSkillType {
  id: number;
  description: string;
  subskills: UserSubSkillType[];
}

export interface NotificationType {
  id: number;
  link: string;
  title: string;
  message: string;
  Icon: any;
  isRead: boolean;
  time: string;
}

export interface UserDataType {
  name: string;
  profileImage?: string;
  skills: UserSkillType[];
}
