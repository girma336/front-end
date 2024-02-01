import { MatchingDataType } from "@/components/matching/types";

const randomColors = [
  "#60A5FA",
  "#34D399",
  "#EF4444",
  "#A855F7",
  "#F59E0B",
  "#EC4899",
  "#6366F1",
  "#4FD1C5",
  "#F97316",
  "#22D3EE",
  "#3B82F6",
  "#10B981",
  "#DC2626",
  "#8B5CF6",
  "#FBBF24",
  "#F472B6",
  "#4F46E5",
  "#14B8A6",
  "#EA580C",
  "#0EA5E9",
  "#2563EB",
  "#047857",
  "#991B1B",
  "#7C3AED",
  "#D97706",
  "#DB2777",
  "#4338CA",
  "#0D9488",
  "#C2410C",
  "#0891B2",
];

const companies: MatchingDataType[] = [
  {
    name: "Company1",
    percentage: 50,
    total: 23,
    skills: [
      { id: 1, description: "", subskills: [{ id: 1, description: "" }] },
    ],
  },
  {
    name: "Company2",
    percentage: 80,
    total: 34,
    skills: [
      { id: 2, description: "", subskills: [{ id: 2, description: "" }] },
    ],
  },
  {
    name: "Company3",
    percentage: 70,
    total: 23,
    skills: [
      { id: 3, description: "", subskills: [{ id: 3, description: "" }] },
    ],
  },
  {
    name: "Company4",
    percentage: 60,
    total: 267,
    skills: [
      { id: 4, description: "", subskills: [{ id: 4, description: "" }] },
    ],
  },
  {
    name: "Company5",
    percentage: 70,
    total: 45,
    skills: [
      { id: 5, description: "", subskills: [{ id: 5, description: "" }] },
    ],
  },
  {
    name: "Company6",
    percentage: 60,
    total: 33,
    skills: [
      { id: 6, description: "", subskills: [{ id: 9, description: "" }] },
    ],
  },
];

const investors: MatchingDataType[] = [
  {
    name: "Investor1",
    percentage: 50,
    total: 144,
    skills: [
      { id: 1, description: "", subskills: [{ id: 8, description: "" }] },
    ],
  },
  {
    name: "Investor2",
    percentage: 80,
    total: 80,
    skills: [
      { id: 3, description: "", subskills: [{ id: 7, description: "" }] },
    ],
  },
  {
    name: "Investor3",
    percentage: 70,
    total: 65,
    skills: [
      {
        id: 12,
        description: "",
        subskills: [{ id: 7, description: "" }],
      },
    ],
  },
  {
    name: "Investor4",
    percentage: 60,
    total: 55,
    skills: [
      { id: 6, description: "", subskills: [{ id: 9, description: "" }] },
    ],
  },
  {
    name: "Investor5",
    percentage: 70,
    total: 20,
    skills: [
      {
        id: 11,
        description: "",
        subskills: [{ id: 9, description: "" }],
      },
    ],
  },
  {
    name: "Investor6",
    percentage: 60,
    total: 79,
    skills: [
      {
        id: 10,
        description: "",
        subskills: [{ id: 9, description: "" }],
      },
    ],
  },
];

export { randomColors, companies, investors };
