export interface QAType {
  id: number;
  title: string;
  description: string;
}

export interface QASectionType {
  id: number;
  description: string;
  icon: {
    src: string;
    alt: string;
  };
  guides: QAType[];
}
