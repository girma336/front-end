export interface DropDownProps {
  title?: string;
  text?: string;
  icon: string;
}

export interface PanelItemType {
  id: number;
  text: string;
  img: string;
}

export interface PrivacyProps {
  id: number;
  title?: string;
  question?: string;
  chosenMenu?: string;
  answer?: null | string;
}
export interface NotificationItemProps {
  title: string;
}
