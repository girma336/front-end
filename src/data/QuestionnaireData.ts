// import { QuestionDataType } from "@/components/questionnaire/types";

// export const QuestionsData: QuestionDataType = {
//   Investor: [
//     {
//       section: "Details",
//       questions: [
//         {
//           _id: 1,
//           description: "Please select your main location:",
//           name: "country",
//           questionType: "selection",
//           options: [
//             {
//               _id: 1,
//               description: "Algeria",
//               value: "Algeria",
//               name: "country",
//             },
//             {
//               _id: 2,
//               description: "Azerhaijan",
//               value: "Azerhaijan",
//               name: "country",
//             },
//             {
//               _id: 3,
//               description: "Bolivia",
//               value: "Bolivia",
//               name: "country",
//             },
//             {
//               _id: 4,
//               description: "Democratic Republic of Congo",
//               value: "Democratic Republic of Congo",
//               name: "country",
//             },
//           ],
//         },
//         {
//           _id: 2,
//           description: "Select your region",
//           questionType: "selection",
//           name: "region",
//           options: [
//             {
//               _id: 5,
//               description: "Region A",
//               value: "Region A",
//               name: "region",
//             },
//             {
//               _id: 6,
//               description: "Region B",
//               value: "Region B",
//               name: "region",
//             },
//             {
//               _id: 7,
//               description: "Region C",
//               value: "Region C",
//               name: "region",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Management",
//       questions: [
//         {
//           _id: 3,
//           description: "What stage(s) are you ready to invest in?",
//           questionType: "checkbox",
//           name: "stage",
//           options: [
//             {
//               _id: 8,
//               description: "Pre-Seed (Bootstrapping)",
//               value: "Pre-Seed",
//               name: "stage",
//             },
//             {
//               _id: 9,
//               description: "Seed (Product Development)",
//               value: "Seed",
//               name: "stage",
//             },
//             {
//               _id: 10,
//               description: "Series A (1st Round Venture Capital)",
//               value: "Series A",
//               name: "stage",
//             },
//             {
//               _id: 11,
//               description: "Series B (2nd Round Venture Capital)",
//               value: "Series B",
//               name: "stage",
//             },
//             {
//               _id: 12,
//               description: "Series C (3rd Round Venture Capital)",
//               value: "Series C",
//               name: "stage",
//             },
//             {
//               _id: 13,
//               description: "Series D (Special Round)",
//               value: "Series D",
//               name: "stage",
//             },
//             {
//               _id: 14,
//               description: "Mezzanine (Bridge loans etc)",
//               value: "Mezzanine",
//               name: "stage",
//             },
//             {
//               _id: 15,
//               description: "IPO (Stock Market Launch)",
//               value: "IPO",
//               name: "stage",
//             },
//           ],
//         },
//         {
//           _id: 4,
//           description: "How many years is the investment portfolio per skill?",
//           questionType: "selectionskill",
//           name: "period",
//           skills: [
//             { _id: 1, description: "Music" },
//             { _id: 2, description: "Arts" },
//             { _id: 3, description: "Social Media" },
//           ],
//           options: [
//             { _id: 16, description: "0-2yrs", value: 1, name: "period" },
//             { _id: 17, description: "2-3yrs", value: 2.5, name: "period" },
//             { _id: 18, description: "3-5yrs", value: 4, name: "period" },
//             { _id: 19, description: "5-10yrs", value: 7.5, name: "period" },
//             { _id: 20, description: "10yrs+", value: 10, name: "period" },
//           ],
//         },
//         {
//           _id: 5,
//           description: "How much investment per interest? (USD)?",
//           questionType: "selectionskill",
//           name: "invest",
//           skills: [
//             { _id: 1, description: "Technology" },
//             { _id: 2, description: "Hospitality" },
//             { _id: 3, description: "Artificial Intellegince" },
//           ],
//           options: [
//             { _id: 21, description: "0-10K", value: 5, name: "invest" },
//             { _id: 22, description: "10-20K", value: 15, name: "invest" },
//             { _id: 23, description: "20-30K", value: 25, name: "invest" },
//             { _id: 24, description: "30-50K", value: 40, name: "invest" },
//             { _id: 25, description: "50-100K", value: 75, name: "invest" },
//             { _id: 26, description: "100K-300K", value: 200, name: "invest" },
//             { _id: 27, description: "300K-500K", value: 400, name: "invest" },
//             { _id: 28, description: "500K-1M", value: 750000, name: "invest" },
//           ],
//         },
//         {
//           _id: 6,
//           description: "How would you like to make your investments?",
//           questionType: "radio",
//           name: "investmentStyle",
//           options: [
//             {
//               _id: 29,
//               description: "Remote",
//               value: "Remote",
//               name: "investmentStyle",
//             },
//             {
//               _id: 30,
//               description: "On-site",
//               value: "On-site",
//               name: "investmentStyle",
//             },
//             {
//               _id: 31,
//               description: "Hybrid",
//               value: "Hybrid",
//               name: "investmentStyle",
//             },
//           ],
//         },
//         {
//           _id: 7,
//           description: "What type(s) of investment are you interested in?",
//           questionType: "checkbox",
//           name: "investmentType",
//           options: [
//             {
//               _id: 32,
//               description:
//                 "Marginal Propensity Investment (MPI) the ratio of change in investment to change in income)",
//               value: "MPI",
//               name: "investmentType",
//             },
//             {
//               _id: 33,
//               description:
//                 "Buy in / Buy out strategy (BIMBO) a levearged buyout is the acquisition of a company using a significant amount of borrowed money to meet the cost of acquisition.",
//               value: "BIMBO",
//               name: "investmentType",
//             },
//             {
//               _id: 34,
//               description:
//                 "Debt Security Investments (financial assets that entitle their owners to a stream of interest payments).",
//               value: "DSI",
//               name: "investmentType",
//             },
//             {
//               _id: 35,
//               description:
//                 "Equity Security Investments (financial assets that represent ownership of a corporation)",
//               value: "ESI",
//               name: "investmentType",
//             },
//             {
//               _id: 36,
//               description:
//                 "Derivatives (a security with a price that is dependent upon or derived from one or more underlying assets)",
//               value: "Derivatives",
//               name: "investmentType",
//             },
//             {
//               _id: 37,
//               description:
//                 "Hybrid Security (a single financial security that combines two or more financial instruments)",
//               value: "Hybrid Security",
//               name: "investmentType",
//             },
//           ],
//         },
//       ],
//     },

//     {
//       section: "Terms",
//       questions: [
//         {
//           _id: 8,
//           description: "What type of commitment?",
//           name: "commitmentStyle",
//           questionType: "radio",
//           options: [
//             {
//               _id: 38,
//               description: "Silent",
//               value: "Silent",
//               name: "commitmentStyle",
//             },
//             {
//               _id: 39,
//               description: "Active",
//               value: "Active",
//               name: "commitmentStyle",
//             },
//             {
//               _id: 40,
//               description: "Hybrid",
//               value: "Hybrid",
//               name: "commitmentStyle",
//             },
//           ],
//         },
//         {
//           _id: 9,
//           description: "Do you want to be a co-founder or mentor/advisor?",
//           questionType: "radio",
//           name: "partnership",
//           options: [
//             {
//               _id: 41,
//               description: "Co-Founder",
//               value: "Co-Founder",
//               name: "partnership",
//             },
//             {
//               _id: 42,
//               description: "Mentor/ Advisor",
//               value: "Mentor/ Advisor",
//               name: "partnership",
//             },
//             {
//               _id: 43,
//               description: "Both",
//               value: "Both",
//               name: "partnership",
//             },
//             { _id: 44, description: "No", value: false, name: "partnership" },
//           ],
//         },
//         {
//           _id: 10,
//           description:
//             "What percentage of the company do you want for your investment?",
//           questionType: "radio",
//           name: "percentage",
//           options: [
//             { _id: 45, description: "0-10%", value: 5, name: "percentage" },
//             { _id: 46, description: "10-15%", value: 12.5, name: "percentage" },
//             { _id: 47, description: "15-35%", value: 25, name: "percentage" },
//             { _id: 48, description: "35-50%", value: 42.5, name: "percentage" },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Values",
//       questions: [
//         {
//           _id: 11,
//           description: "Which are your key values?",
//           name: "key values",
//           questionType: "checkbox",
//           options: [
//             {
//               _id: 49,
//               description: "Integrity",
//               value: "Integrity",
//               name: "key values",
//             },
//             {
//               _id: 50,
//               description: "Accountability",
//               value: "Accountability",
//               name: "key values",
//             },
//             {
//               _id: 51,
//               description: "Creativity",
//               value: "Creativity",
//               name: "key values",
//             },
//             {
//               _id: 52,
//               description: "Honesty",
//               value: "Honesty",
//               name: "key values",
//             },
//             {
//               _id: 53,
//               description: "Loyalty",
//               value: "Loyalty",
//               name: "key values",
//             },
//             {
//               _id: 54,
//               description: "Responsibility",
//               value: "Responsibility",
//               name: "key values",
//             },
//             {
//               _id: 55,
//               description: "Compassion",
//               value: "Compassion",
//               name: "key values",
//             },
//             {
//               _id: 56,
//               description: "Spirituality",
//               value: "Spirituality",
//               name: "key values",
//             },
//             {
//               _id: 57,
//               description: "Kindness",
//               value: "Kindness",
//               name: "key values",
//             },
//             {
//               _id: 58,
//               description: "Respect",
//               value: "Respect",
//               name: "key values",
//             },
//             {
//               _id: 59,
//               description: "Innovation",
//               value: "Innovation",
//               name: "key values",
//             },
//             {
//               _id: 60,
//               description: "Altruism",
//               value: "Altruism",
//               name: "key values",
//             },
//             {
//               _id: 61,
//               description: "Humility",
//               value: "Humility",
//               name: "key values",
//             },
//             {
//               _id: 62,
//               description: "Diversity",
//               value: "Diversity",
//               name: "key values",
//             },
//             {
//               _id: 63,
//               description: "Beauty",
//               value: "Beauty",
//               name: "key values",
//             },
//             {
//               _id: 64,
//               description: "Teamwork",
//               value: "Teamwork",
//               name: "key values",
//             },
//             {
//               _id: 65,
//               description: "Social Equality",
//               value: "Social Equality",
//               name: "key values",
//             },
//             {
//               _id: 66,
//               description: "Autonomy",
//               value: "Autonomy",
//               name: "key values",
//             },
//             {
//               _id: 67,
//               description: "Authority",
//               value: "Authority",
//               name: "key values",
//             },
//             {
//               _id: 68,
//               description: "Dependability",
//               value: "Dependability",
//               name: "key values",
//             },
//             {
//               _id: 69,
//               description: "Competence",
//               value: "Competence",
//               name: "key values",
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   Company: [
//     {
//       section: "Details",
//       questions: [
//         {
//           _id: 12,
//           description: "Please select your main location:",
//           name: "country",
//           questionType: "selection",
//           options: [
//             {
//               _id: 70,
//               description: "Algeria",
//               value: "Algeria",
//               name: "country",
//             },
//             {
//               _id: 71,
//               description: "Azerhaijan",
//               value: "Azerhaijan",
//               name: "country",
//             },
//             {
//               _id: 72,
//               description: "Bolivia",
//               value: "Bolivia",
//               name: "country",
//             },
//             {
//               _id: 73,
//               description: "Democratic Republic of Congo",
//               value: "Democratic Republic of Congo",
//               name: "country",
//             },
//           ],
//         },
//         {
//           _id: 13,
//           description: "What stage is your business?",
//           name: "stage",
//           questionType: "radio",
//           options: [
//             {
//               _id: 74,
//               description: "Idea (Not started/Just Started)",
//               value: "Idea",
//               name: "stage",
//             },
//             {
//               _id: 75,
//               description: "StartUp (1-2 Years)",
//               value: "StartUp",
//               name: "stage",
//             },
//             {
//               _id: 76,
//               description: "Registered Business(More than 2years)",
//               value: "Registered Business",
//               name: "stage",
//             },
//             {
//               _id: 77,
//               description: "Established Business(10yrs+)",
//               value: "Established Business",
//               name: "stage",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Management",
//       questions: [
//         {
//           _id: 14,
//           description:
//             "When Hiring, How many years of experience would you require per skill?",
//           name: "period",
//           questionType: "selectionskill",
//           skills: [
//             { _id: 1, description: "Technology" },
//             { _id: 2, description: "Hospitality" },
//             { _id: 3, description: "Artificial Intellegince" },
//           ],
//           options: [
//             { _id: 78, description: "0-2yrs", value: 1, name: "period" },
//             { _id: 79, description: "2-3yrs", value: 2.5, name: "period" },
//             { _id: 80, description: "3-5yrs", value: 4, name: "period" },
//             { _id: 81, description: "5-10yrs", value: 7.5, name: "period" },
//             { _id: 82, description: "10yrs+", value: 10, name: "period" },
//           ],
//         },
//         {
//           _id: 15,
//           description: "How much monthly pay? Per skill? (USD)",
//           name: "salary",
//           questionType: "selectionskill",
//           skills: [
//             { _id: 1, description: "Technology" },
//             { _id: 2, description: "Hospitality" },
//             { _id: 3, description: "Artificial Intellegince" },
//           ],
//           options: [
//             { _id: 83, description: "1-20K", value: 10500, name: "salary" },
//             { _id: 84, description: "20-50K", value: 35000, name: "salary" },
//             { _id: 85, description: "50-100K", value: 75000, name: "salary" },
//             { _id: 86, description: "100+", value: 100000, name: "salary" },
//           ],
//         },
//         {
//           _id: 16,
//           description: "Where would you like your workforce to work?",
//           name: "workStyle",
//           questionType: "radio",
//           options: [
//             {
//               _id: 87,
//               description: "Remote",
//               value: "Remote",
//               name: "workStyle",
//             },
//             {
//               _id: 88,
//               description: "On-site",
//               value: "On-site",
//               name: "workStyle",
//             },
//             {
//               _id: 89,
//               description: "Hybrid",
//               value: "Hybrid",
//               name: "workStyle",
//             },
//           ],
//         },
//         {
//           _id: 17,
//           description: "What type(s) of employment are you willing to offer",
//           name: "workType",
//           questionType: "checkbox",
//           options: [
//             {
//               _id: 90,
//               description: "Contract",
//               value: "Contract",
//               name: "workType",
//             },
//             {
//               _id: 91,
//               description: "Freelance",
//               value: "Freelance",
//               name: "workType",
//             },
//             {
//               _id: 92,
//               description: "Internship",
//               value: "Internship",
//               name: "workType",
//             },
//             {
//               _id: 93,
//               description: "Voluntary",
//               value: "Voluntary",
//               name: "workType",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Terms",
//       questions: [
//         {
//           _id: 18,
//           description: "What type of commitment do you require?",
//           name: "commitment",
//           questionType: "radio",
//           options: [
//             {
//               _id: 94,
//               description: "Full-Time",
//               value: "Full-Time",
//               name: "commitment",
//             },
//             {
//               _id: 95,
//               description: "Part-Time",
//               value: "Part-Time",
//               name: "commitment",
//             },
//             { _id: 96, description: "Both", value: "Both", name: "commitment" },
//           ],
//         },
//         {
//           _id: 19,
//           description: "Do you seek a co-founder or mentor/consultant?",
//           name: "partnership",
//           questionType: "radio",
//           options: [
//             {
//               _id: 97,
//               description: "Co-Founder",
//               value: "Co-Founder",
//               name: "partnership",
//             },
//             {
//               _id: 98,
//               description: "Mentor/ Consultant",
//               value: "Mentor/ Consultant",
//               name: "partnership",
//             },
//             {
//               _id: 99,
//               description: "Both",
//               value: "Both",
//               name: "partnership",
//             },
//             { _id: 100, description: "No", value: false, name: "partnership" },
//           ],
//         },
//         {
//           _id: 20,
//           description:
//             "What percentage of your company are you willing to give for investment?",
//           name: "shares",
//           questionType: "radio",
//           options: [
//             { _id: 101, description: "0-10%", value: 5, name: "shares" },
//             { _id: 102, description: "10-15%", value: 12.5, name: "shares" },
//             { _id: 103, description: "15-35%", value: 25, name: "shares" },
//             { _id: 104, description: "35-50%", value: 42.5, name: "shares" },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Values",
//       questions: [
//         {
//           _id: 21,
//           description: "Which are your key values?",
//           name: "key values",
//           questionType: "checkbox",
//           options: [
//             {
//               _id: 105,
//               description: "Integrity",
//               value: "Integrity",
//               name: "key values",
//             },
//             {
//               _id: 106,
//               description: "Accountability",
//               value: "Accountability",
//               name: "key values",
//             },
//             {
//               _id: 107,
//               description: "Creativity",
//               value: "Creativity",
//               name: "key values",
//             },
//             {
//               _id: 108,
//               description: "Honesty",
//               value: "Honesty",
//               name: "key values",
//             },
//             {
//               _id: 109,
//               description: "Loyalty",
//               value: "Loyalty",
//               name: "key values",
//             },
//             {
//               _id: 110,
//               description: "Responsibility",
//               value: "Responsibility",
//               name: "key values",
//             },
//             {
//               _id: 111,
//               description: "Compassion",
//               value: "Compassion",
//               name: "key values",
//             },
//             {
//               _id: 112,
//               description: "Spirituality",
//               value: "Spirituality",
//               name: "key values",
//             },
//             {
//               _id: 113,
//               description: "Kindness",
//               value: "Kindness",
//               name: "key values",
//             },
//             {
//               _id: 114,
//               description: "Respect",
//               value: "Respect",
//               name: "key values",
//             },
//             {
//               _id: 115,
//               description: "Innovation",
//               value: "Innovation",
//               name: "key values",
//             },
//             {
//               _id: 116,
//               description: "Altruism",
//               value: "Altruism",
//               name: "key values",
//             },
//             {
//               _id: 117,
//               description: "Humility",
//               value: "Humility",
//               name: "key values",
//             },
//             {
//               _id: 118,
//               description: "Diversity",
//               value: "Diversity",
//               name: "key values",
//             },
//             {
//               _id: 119,
//               description: "Beauty",
//               value: "Beauty",
//               name: "key values",
//             },
//             {
//               _id: 120,
//               description: "Teamwork",
//               value: "Teamwork",
//               name: "key values",
//             },
//             {
//               _id: 121,
//               description: "Social Equality",
//               value: "Social Equality",
//               name: "key values",
//             },
//             {
//               _id: 122,
//               description: "Autonomy",
//               value: "Autonomy",
//               name: "key values",
//             },
//             {
//               _id: 123,
//               description: "Authority",
//               value: "Authority",
//               name: "key values",
//             },
//             {
//               _id: 124,
//               description: "Dependability",
//               value: "Dependability",
//               name: "key values",
//             },
//             {
//               _id: 125,
//               description: "Competence",
//               value: "Competence",
//               name: "key values",
//             },
//           ],
//         },
//       ],
//     },
//   ],
//   Talent: [
//     {
//       section: "Details",
//       questions: [
//         {
//           _id: 33,
//           description: "Please select your date of birth:",
//           name: "dob",
//           questionType: "date",
//           options: [],
//         },
//         {
//           _id: 22,
//           description: "Please select your main location:",
//           name: "country",
//           questionType: "selection",
//           options: [
//             {
//               _id: 126,
//               description: "Algeria",
//               value: "Algeria",
//               name: "country",
//             },
//             {
//               _id: 127,
//               description: "Azerhaijan",
//               value: "Azerhaijan",
//               name: "country",
//             },
//             {
//               _id: 128,
//               description: "Bolivia",
//               value: "Bolivia",
//               name: "country",
//             },
//             {
//               _id: 129,
//               description: "Democratic Republic of Congo",
//               value: "Democratic Republic of Congo",
//               name: "country",
//             },
//           ],
//         },
//         {
//           _id: 23,
//           description: "Which stage is your career?",
//           name: "stage",
//           questionType: "radio",
//           options: [
//             {
//               _id: 130,
//               description: "Entry Level (Junior)",
//               value: "Junior",
//               name: "stage",
//             },
//             {
//               _id: 131,
//               description: "Intermediate (1-2 Years)",
//               value: "Intermediate",
//               name: "stage",
//             },
//             {
//               _id: 132,
//               description: "Mid-Level (More than 2years)",
//               value: "Mid-Level",
//               name: "stage",
//             },
//             {
//               _id: 133,
//               description: "Senior or Executive (10yrs+)",
//               value: "Senior",
//               name: "stage",
//             },
//           ],
//         },
//         {
//           _id: 24,
//           description: "What stage company would you like to work for?",
//           name: "company stage",
//           questionType: "radio",
//           options: [
//             {
//               _id: 134,
//               description: "Idea (Not started/Just Started)",
//               value: "Idea",
//               name: "company stage",
//             },
//             {
//               _id: 135,
//               description: "StartUp (1-2 Years)",
//               value: "StartUp",
//               name: "company stage",
//             },
//             {
//               _id: 136,
//               description: "Registered Business(More than 2years)",
//               value: "Registered Business",
//               name: "company stage",
//             },
//             {
//               _id: 137,
//               description: "Established Business(10yrs+)",
//               value: "Established Business",
//               name: "company stage",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Management",
//       questions: [
//         {
//           _id: 25,
//           description: "How many years have you worked on each skill?",
//           name: "period",
//           questionType: "selectionskill",
//           skills: [
//             { _id: 1, description: "Technology" },
//             { _id: 2, description: "Hospitality" },
//             { _id: 3, description: "Artificial Intellegince" },
//           ],
//           options: [
//             { _id: 138, description: "0-2yrs", value: 1, name: "period" },
//             { _id: 139, description: "2-3yrs", value: 2.5, name: "period" },
//             { _id: 140, description: "3-5yrs", value: 4, name: "period" },
//             { _id: 141, description: "5-10yrs", value: 7.5, name: "period" },
//             { _id: 142, description: "10yrs+", value: 10, name: "period" },
//           ],
//         },
//         {
//           _id: 26,
//           description: "How much monthly pay? Per skill? (USD)",
//           name: "salary",
//           questionType: "selectionskill",
//           skills: [
//             { _id: 1, description: "Technology" },
//             { _id: 2, description: "Hospitality" },
//             { _id: 3, description: "Artificial Intellegince" },
//           ],
//           options: [
//             { _id: 143, description: "1-20K", value: 10000, name: "salary" },
//             { _id: 144, description: "20-50K", value: 35000, name: "salary" },
//             { _id: 145, description: "50-100K", value: 75000, name: "salary" },
//             { _id: 146, description: "100K+", value: 100000, name: "salary" },
//           ],
//         },
//         {
//           _id: 27,
//           description: "Where would you like to work?",
//           name: "workStyle",
//           questionType: "radio",
//           options: [
//             {
//               _id: 147,
//               description: "Remote",
//               value: "Remote",
//               name: "workStyle",
//             },
//             {
//               _id: 148,
//               description: "On-site",
//               value: "On-site",
//               name: "workStyle",
//             },
//             {
//               _id: 149,
//               description: "Hybrid",
//               value: "Hybrid",
//               name: "workStyle",
//             },
//           ],
//         },
//         {
//           _id: 28,
//           description:
//             "What type(s) of employment are you willing to consider?",
//           name: "workType",
//           questionType: "checkbox",
//           options: [
//             {
//               _id: 150,
//               description: "Contract",
//               value: "Contract",
//               name: "workType",
//             },
//             {
//               _id: 151,
//               description: "Freelance",
//               value: "Freelance",
//               name: "workType",
//             },
//             {
//               _id: 152,
//               description: "Internship",
//               value: "Internship",
//               name: "workType",
//             },
//             {
//               _id: 153,
//               description: "Voluntary",
//               value: "Voluntary",
//               name: "workType",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Terms",
//       questions: [
//         {
//           _id: 29,
//           description: "What is your availability?",
//           name: "commitment",
//           questionType: "radio",
//           options: [
//             {
//               _id: 154,
//               description: "Full-Time",
//               value: "Full-Time",
//               name: "commitment",
//             },
//             {
//               _id: 155,
//               description: "Part-Time",
//               value: "Part-Time",
//               name: "commitment",
//             },
//             {
//               _id: 156,
//               description: "Both",
//               value: "Both",
//               name: "commitment",
//             },
//           ],
//         },
//         {
//           _id: 30,
//           description: "Do you want to be a co-founder or mentor/consultant?",
//           name: "partnership",
//           questionType: "radio",
//           options: [
//             {
//               _id: 157,
//               description: "Co-Founder",
//               value: "Co-Founder",
//               name: "partnership",
//             },
//             {
//               _id: 158,
//               description: "Mentor/ Consultant ",
//               value: "Mentor/ Consultant ",
//               name: "partnership",
//             },
//             {
//               _id: 159,
//               description: "Both",
//               value: "Both",
//               name: "partnership",
//             },
//             { _id: 160, description: "No", value: false, name: "partnership" },
//           ],
//         },
//         {
//           _id: 31,
//           description: "How many shares in the company would you want?",
//           name: "shares",
//           questionType: "radio",
//           options: [
//             { _id: 161, description: "0-10%", value: 5, name: "shares" },
//             { _id: 162, description: "10-15%", value: 12.5, name: "shares" },
//             { _id: 163, description: "15-35%", value: 25, name: "shares" },
//             { _id: 164, description: "35-50%", value: 42.5, name: "shares" },
//           ],
//         },
//       ],
//     },
//     {
//       section: "Values",
//       questions: [
//         {
//           _id: 32,
//           description: "Which are your key values?",
//           name: "key values",
//           questionType: "checkbox",
//           options: [
//             {
//               _id: 165,
//               description: "Integrity",
//               value: "Integrity",
//               name: "key values",
//             },
//             {
//               _id: 185,
//               description: "Accountability",
//               value: "Accountability",
//               name: "key values",
//             },
//             {
//               _id: 166,
//               description: "Creativity",
//               value: "Creativity",
//               name: "key values",
//             },
//             {
//               _id: 167,
//               description: "Honesty",
//               value: "Honesty",
//               name: "key values",
//             },
//             {
//               _id: 168,
//               description: "Loyalty",
//               value: "Loyalty",
//               name: "key values",
//             },
//             {
//               _id: 169,
//               description: "Responsibility",
//               value: "Responsibility",
//               name: "key values",
//             },
//             {
//               _id: 170,
//               description: "Compassion",
//               value: "Compassion",
//               name: "key values",
//             },
//             {
//               _id: 171,
//               description: "Spirituality",
//               value: "Spirituality",
//               name: "key values",
//             },
//             {
//               _id: 172,
//               description: "Kindness",
//               value: "Kindness",
//               name: "key values",
//             },
//             {
//               _id: 173,
//               description: "Respect",
//               value: "Respect",
//               name: "key values",
//             },
//             {
//               _id: 174,
//               description: "Innovation",
//               value: "Innovation",
//               name: "key values",
//             },
//             {
//               _id: 175,
//               description: "Altruism",
//               value: "Altruism",
//               name: "key values",
//             },
//             {
//               _id: 176,
//               description: "Humility",
//               value: "Humility",
//               name: "key values",
//             },
//             {
//               _id: 177,
//               description: "Diversity",
//               value: "Diversity",
//               name: "key values",
//             },
//             {
//               _id: 178,
//               description: "Beauty",
//               value: "Beauty",
//               name: "key values",
//             },
//             {
//               _id: 179,
//               description: "Teamwork",
//               value: "Teamwork",
//               name: "key values",
//             },
//             {
//               _id: 180,
//               description: "Social Equality",
//               value: "Social Equality",
//               name: "key values",
//             },
//             {
//               _id: 181,
//               description: "Autonomy",
//               value: "Autonomy",
//               name: "key values",
//             },
//             {
//               _id: 182,
//               description: "Authority",
//               value: "Authority",
//               name: "key values",
//             },
//             {
//               _id: 183,
//               description: "Dependability",
//               value: "Dependability",
//               name: "key values",
//             },
//             {
//               _id: 184,
//               description: "Competence",
//               value: "Competence",
//               name: "key values",
//             },
//           ],
//         },
//       ],
//     },
//   ],
// };
