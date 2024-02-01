interface UserDataType {
  profileImage: string;
  name: string;
  skills: {
    id: number;
    description: string;
    icon: string;
    subskills: { id: number; description: string }[];
  }[];
  interests: {
    id: number;
    description: string;
    subinterests: { id: number; description: string }[];
  }[];
}

export const UserData: UserDataType = {
  profileImage: "/T-rex.jpg",
  name: "John Doe",
  skills: [
    {
      id: 1,
      description: "Basic Medical Sciences",
      icon: "/icons/skills-icons/basic-medical-icon.svg",
      subskills: [
        { id: 1, description: "Chemical Pathology" },
        { id: 2, description: "Medical Microbiology and Parasitology" },
        { id: 3, description: "Medical Pharmacology and Therapeutics" },
      ],
    },
    {
      id: 2,
      description: "Clinical Sciences",
      icon: "/icons/skills-icons/clinical.svg",
      subskills: [
        { id: 4, description: "Community Health and Nutrition" },
        { id: 5, description: "Mental Health" },
        { id: 6, description: "Radiology" },
      ],
    },
    {
      id: 3,
      description: "Environmental Design & Management",
      icon: "/icons/skills-icons/environmental.svg",
      subskills: [
        { id: 7, description: "Architecture" },
        { id: 8, description: "Quantity Surveying" },
        { id: 9, description: "Urban and Regional Planning" },
      ],
    },
  ],
  interests: [
    {
      id: 1,
      description: "Agriculture",
      subinterests: [
        { id: 13, description: "Animal Husbandry" },
        { id: 14, description: "Agricultural Extension and Rural Development" },
        { id: 15, description: "Soil Science and Soil Chemistry" },
      ],
    },
    {
      id: 2,
      description: "Healthcare",
      subinterests: [
        { id: 17, description: "Ambulatory services" },
        { id: 18, description: "Physical and occupational therapy" },
        { id: 23, description: "Prenatal care" },
      ],
    },
    {
      id: 3,
      description: "Creative",
      subinterests: [
        { id: 34, description: "Architecture" },
        { id: 32, description: "Graphic Design" },
        {
          id: 41,
          description: "TV and Radio (including Broadcast production)",
        },
      ],
    },
  ],
};
