export interface SubInterestType {
  _id: number;
  name: string;
}

export interface InterestType {
  _id: number;
  name: string;
  icon: string;
  alt_description: string;
  subInterests: SubInterestType[];
}

export interface SelectedInterestsType {
  _id: number;
  name: string;
  icon: string;
  alt_description: string;
  subInterests: {
    primary: SubInterestType[];
    other: SubInterestType[];
  };
}

export interface SelectedSubInterestType {
  primary: SubInterestType[];
  other: SubInterestType[];
}

export interface InterestApiDataType {
  _id: number;
  name: string;
  icon: string;
  alt_description: string;
  subInterests: { _id: number; name: string }[];
}
