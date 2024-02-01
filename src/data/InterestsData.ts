// import { InterestType } from "@/components/interests/types";

// const InterestsData: InterestType[] = [
//   {
//     _id: 1,
//     name: "Agriculture",
//     icon: "/icons/interests-icons/agriculture.svg",
//     subInterests: [
//       { _id: 1, name: "Animal Husbandry" },
//       { _id: 2, name: "Agricultural Extension and Rural Development" },
//       { _id: 3, name: "Agricultural Economics" },
//       { _id: 4, name: "Agricultural Engineering" },
//       { _id: 5, name: "Agricultural Microbiology" },
//       { _id: 6, name: "Agronomy" },
//       { _id: 7, name: "Animal Sciences" },
//       { _id: 8, name: "Crop Production and Protection" },
//       { _id: 9, name: "Entomology" },
//       { _id: 10, name: "Environmental Sciences" },
//       { _id: 11, name: "Family" },
//       { _id: 12, name: "Nutrition & Consumer Sciences" },
//       { _id: 13, name: "Food Science and Technology" },
//       { _id: 14, name: "Forestry" },
//       { _id: 15, name: "Genetics and plant breeding" },
//       { _id: 16, name: "Horticulture" },
//       { _id: 17, name: "Land and Water Management" },
//       { _id: 18, name: "Plant Protection" },
//       { _id: 19, name: "Plant Psychology" },
//       { _id: 20, name: "Plant Science" },
//       { _id: 21, name: "Soil Science and Soil Chemistry" },
//     ],
//   },
//   {
//     _id: 2,
//     name: "Real Estate",
//     icon: "/icons/interests-icons/real-estate.svg",
//     subInterests: [
//       { _id: 22, name: "Commercial" },
//       { _id: 23, name: "Industrial" },
//       { _id: 24, name: "Raw land" },
//       { _id: 25, name: "Residential" },
//       { _id: 26, name: "Special use" },
//     ],
//   },
//   {
//     _id: 3,
//     name: "Food & Drinks",
//     icon: "/icons/interests-icons/foods-beverages.svg",
//     subInterests: [
//       { _id: 27, name: "Beverage - water" },
//       { _id: 28, name: "Alcoholic drinks" },
//       { _id: 29, name: "Fruit drinks" },
//       { _id: 30, name: "Soda" },
//       { _id: 31, name: "Juice" },
//       { _id: 32, name: "Dairy" },
//       { _id: 33, name: "Fast Food" },
//       { _id: 34, name: "Fruits and Vegetables" },
//       { _id: 35, name: "Grain" },
//       { _id: 36, name: "Herbs and Spices" },
//       { _id: 37, name: "Meat" },
//       { _id: 38, name: "Poultry and seafood" },
//       { _id: 39, name: "Sugar and Confectionery" },
//     ],
//   },
//   {
//     _id: 4,
//     name: "Healthcare",
//     icon: "/icons/interests-icons/healthcare.svg",
//     subInterests: [
//       { _id: 40, name: "Ambulatory services" },
//       { _id: 41, name: "Dental care" },
//       { _id: 42, name: "Family Planning & Abortion Clinics" },
//       { _id: 43, name: "Laboratory and diagnostic care" },
//       { _id: 44, name: "Manufacturer of medical devices" },
//       { _id: 45, name: "Equipment and hospital supplies" },
//       { _id: 46, name: "Medical Insurance" },
//       { _id: 47, name: "Mental health care" },
//       { _id: 48, name: "Nutritional support" },
//       { _id: 49, name: "Pathology" },
//       { _id: 50, name: "Physical and occupational therapy" },
//       { _id: 51, name: "Pharmaceutical care" },
//       { _id: 52, name: "Pharmaceuticals and related segments" },
//       { _id: 53, name: "Prenatal care" },
//       { _id: 54, name: "Preventative care" },
//       { _id: 55, name: "Substance abuse treatment" },
//     ],
//   },
//   {
//     _id: 5,
//     name: "Hospitality",
//     icon: "/icons/interests-icons/hospitality.svg",
//     subInterests: [
//       { _id: 55, name: "Accommodation" },
//       { _id: 56, name: "Attractions" },
//       { _id: 57, name: "Entertainment and Recreation" },
//       { _id: 58, name: "Meetings and Events" },
//       { _id: 59, name: "Travel and Tourism" },
//     ],
//   },
//   {
//     _id: 6,
//     name: "Creative",
//     icon: "/icons/interests-icons/creative.svg",
//     subInterests: [
//       { _id: 60, name: "Acting" },
//       { _id: 61, name: "Advertising and Marketing" },
//       { _id: 62, name: "Architecture" },
//       { _id: 63, name: "Arts and Design" },
//       { _id: 64, name: "Crafts" },
//       { _id: 65, name: "Electronic Publishing" },
//       { _id: 66, name: "Film" },
//       { _id: 67, name: "Graphic Design" },
//       { _id: 68, name: "Journalism" },
//       { _id: 69, name: "Museums and Libraries" },
//       { _id: 70, name: "Music" },
//       { _id: 71, name: "Performing Arts" },
//       { _id: 72, name: "Photography" },
//       { _id: 73, name: "Technical Writing" },
//       { _id: 74, name: "TV and Radio (including Broadcast production)" },
//       { _id: 75, name: "Video" },
//     ],
//   },
//   {
//     _id: 7,
//     name: "IT",
//     icon: "/icons/interests-icons/it.svg",
//     subInterests: [
//       { _id: 76, name: "3D modeling software" },
//       { _id: 77, name: "Animation" },
//       { _id: 78, name: "API design software" },
//       { _id: 79, name: "API management tools" },
//       { _id: 80, name: "Access gateway" },
//       { _id: 81, name: "Artificial Intelligence" },
//       { _id: 82, name: "Cloud Computing" },
//       { _id: 83, name: "Computer Games" },
//       { _id: 84, name: "Computer Graphics" },
//       { _id: 85, name: "Data Science" },
//       { _id: 86, name: "Hardware Engineering" },
//       { _id: 87, name: "Network Administration" },
//       { _id: 88, name: "Object-Oriented Programming" },
//       { _id: 89, name: "Operating Systems" },
//       { _id: 90, name: "Quality Assurance" },
//       { _id: 91, name: "Software Engineering" },
//       { _id: 92, name: "Telecommunications" },
//       { _id: 93, name: "User Experience Design" },
//       { _id: 94, name: "Security Specialist" },
//     ],
//   },
//   {
//     _id: 8,
//     name: "Financial services",
//     icon: "/icons/interests-icons/finances.svg",
//     subInterests: [
//       { _id: 95, name: "Accounting" },
//       { _id: 96, name: "Advisory" },
//       { _id: 97, name: "Business banking" },
//       { _id: 98, name: "Funds and investment" },
//       { _id: 99, name: "Insurance" },
//       { _id: 100, name: "Investment banking" },
//       { _id: 101, name: "Life assurance and pensions" },
//       { _id: 102, name: "Regulated advice" },
//       { _id: 103, name: "Retail banking" },
//     ],
//   },
//   {
//     _id: 9,
//     name: "Education",
//     icon: "/icons/interests-icons/education.svg",
//     subInterests: [
//       { _id: 104, name: "Assessment services" },
//       { _id: 105, name: "Business schools" },
//       { _id: 106, name: "IT/computing schools" },
//       { _id: 107, name: "Learning centers" },
//       { _id: 108, name: "Special Needs" },
//       { _id: 109, name: "Trade/vocational schools" },
//       { _id: 110, name: "Tutoring services" },
//     ],
//   },
//   {
//     _id: 10,
//     name: "Oil & gas",
//     icon: "/icons/interests-icons/oilgas.svg",
//     subInterests: [
//       { _id: 111, name: "Downstream (refining and marketing)" },
//       { _id: 112, name: "Midstream (transportation and storage)" },
//       { _id: 113, name: "Upstream (oil and gas exploration and production)" },
//     ],
//   },
//   {
//     _id: 11,
//     name: "Ecosystems & Environment",
//     icon: "/icons/interests-icons/ecosystem.svg",
//     subInterests: [
//       { _id: 114, name: "Startups" },
//       { _id: 115, name: "Programs" },
//       { _id: 116, name: "Investors" },
//       { _id: 117, name: "Co-working Spaces" },
//       { _id: 118, name: "Accelerators" },
//       { _id: 119, name: "Incubators" },
//       { _id: 120, name: "Startup Consulting" },
//       { _id: 121, name: "Recruitment Agencies" },
//       { _id: 122, name: "Grant Institutions" },
//       { _id: 123, name: "NGOs" },
//       { _id: 124, name: "Companies" },
//       { _id: 125, name: "Desert ecosystems" },
//       { _id: 126, name: "Forest ecosystems" },
//       { _id: 127, name: "Freshwater ecosystems" },
//       { _id: 128, name: "Grassland ecosystem" },
//       { _id: 129, name: "Marine ecosystems" },
//       { _id: 130, name: "Tundra ecosystems" },
//     ],
//   },
//   {
//     _id: 12,
//     name: "Construction",
//     icon: "/icons/interests-icons/construction.svg",
//     subInterests: [
//       { _id: 131, name: "Infrastructure and Heavy Construction" },
//       { _id: 132, name: "Institutional and Commercial Building" },
//       { _id: 133, name: "Residential Building" },
//       { _id: 134, name: "Specialized industrial construction" },
//     ],
//   },
//   {
//     _id: 13,
//     name: "Manufacturing",
//     icon: "/icons/interests-icons/manufacturing.svg",
//     subInterests: [
//       { _id: 135, name: "Clothing and textiles" },
//       { _id: 136, name: "Electronic" },
//       { _id: 137, name: "computers and transportation" },
//       { _id: 138, name: "Food production" },
//       { _id: 139, name: "Metal manufacturing" },
//       { _id: 140, name: "Petroleum" },
//       { _id: 141, name: "chemicals and plastics" },
//       { _id: 142, name: "Wood" },
//       { _id: 143, name: "Leather and paper" },
//     ],
//   },
//   {
//     _id: 14,
//     name: "Transportation",
//     icon: "/icons/interests-icons/transport.svg",
//     subInterests: [
//       { _id: 144, name: "Air Transport" },
//       { _id: 145, name: "Boats" },
//       { _id: 146, name: "Car Hire" },
//       { _id: 147, name: "Cargo" },
//       { _id: 148, name: "Livestock Transportation" },
//       { _id: 149, name: "Marine Shipping" },
//       { _id: 150, name: "Medical Transport" },
//       { _id: 151, name: "Senior Services" },
//       { _id: 152, name: "Specialty Transportation" },
//       { _id: 153, name: "Taxi Service" },
//     ],
//   },
//   {
//     _id: 15,
//     name: "Utilities",
//     icon: "/icons/interests-icons/utilities.svg",
//     subInterests: [
//       { _id: 154, name: "Electricity" },
//       { _id: 155, name: "Garbage Disposal" },
//       { _id: 156, name: "Gas" },
//       { _id: 157, name: "Water/Sewage" },
//     ],
//   },
//   {
//     _id: 16,
//     name: "Energy And Metals",
//     icon: "/icons/interests-icons/energy-metals.svg",
//     subInterests: [
//       { _id: 158, name: "Chemical" },
//       { _id: 159, name: "Electrical" },
//       { _id: 160, name: "Ferrous" },
//       { _id: 161, name: "Mechanical" },
//       { _id: 162, name: "Non Ferrous metals and alloys" },
//       { _id: 163, name: "Radiant" },
//       { _id: 164, name: "Thermal and Nuclear" },
//     ],
//   },
//   {
//     _id: 17,
//     name: "Fashion and Wellbeing",
//     icon: "/icons/interests-icons/fashion.svg",
//     subInterests: [
//       { _id: 165, name: "Accessories" },
//       { _id: 166, name: "Buyers" },
//       { _id: 167, name: "Costume" },
//       { _id: 168, name: "Designer" },
//       { _id: 169, name: "Editorial" },
//       { _id: 170, name: "Fabric" },
//       { _id: 171, name: "Fitting" },
//       { _id: 172, name: "Hair" },
//       { _id: 173, name: "Makeup" },
//       { _id: 174, name: "Model" },
//       { _id: 175, name: "Nails" },
//       { _id: 176, name: "Patterns" },
//       { _id: 177, name: "Production" },
//       { _id: 178, name: "Stylist" },
//       { _id: 179, name: "Tailor" },
//       { _id: 180, name: "Textiles" },
//     ],
//   },
//   {
//     _id: 18,
//     name: "Sports",
//     icon: "/icons/interests-icons/sports.svg",
//     subInterests: [
//       { _id: 181, name: "Archery" },
//       { _id: 182, name: "Athletics" },
//       { _id: 183, name: "Basketball" },
//       { _id: 184, name: "Boxing" },
//       { _id: 185, name: "Fencing" },
//       { _id: 186, name: "Football" },
//       { _id: 187, name: "Golfers" },
//       { _id: 188, name: "Gymnastics" },
//       { _id: 189, name: "Ice Hockey" },
//       { _id: 190, name: "Tennis" },
//       { _id: 191, name: "Pool" },
//       { _id: 192, name: "Rugby" },
//       { _id: 193, name: "Volleyball" },
//     ],
//   },
//   {
//     _id: 19,
//     name: "Entertainment",
//     icon: "/icons/interests-icons/entertainment.svg",
//     subInterests: [
//       { _id: 194, name: "Action" },
//       { _id: 195, name: "Adventure fiction" },
//       { _id: 196, name: "Amusement park" },
//       { _id: 197, name: "Animation" },
//       { _id: 198, name: "Art" },
//       { _id: 199, name: "Circus" },
//       { _id: 200, name: "Comedy" },
//       { _id: 201, name: "Comedy club" },
//       { _id: 202, name: "Concert" },
//       { _id: 203, name: "Dance" },
//       { _id: 204, name: "Drama" },
//       { _id: 205, name: "Humour" },
//       { _id: 206, name: "Museum" },
//       { _id: 207, name: "Music" },
//       { _id: 208, name: "Musical theater" },
//       { _id: 209, name: "Nightclub" },
//       { _id: 210, name: "Performing arts" },
//       { _id: 211, name: "Radio" },
//       { _id: 212, name: "Sports" },
//       { _id: 213, name: "Theatre" },
//     ],
//   },
//   {
//     _id: 20,
//     name: "Social Media",
//     icon: "/icons/interests-icons/social-media.svg",
//     subInterests: [
//       { _id: 214, name: "Action" },
//       { _id: 215, name: "Adventure fiction" },
//       { _id: 216, name: "Amusement park" },
//       { _id: 217, name: "Animation" },
//       { _id: 218, name: "Art" },
//       { _id: 219, name: "Circus" },
//       { _id: 220, name: "Comedy" },
//       { _id: 221, name: "Comedy club" },
//       { _id: 222, name: "Concert" },
//       { _id: 223, name: "Dance" },
//       { _id: 224, name: "Drama" },
//       { _id: 225, name: "Humour" },
//       { _id: 226, name: "Museum" },
//       { _id: 227, name: "Music" },
//       { _id: 228, name: "Musical theater" },
//       { _id: 229, name: "Nightclub" },
//       { _id: 230, name: "Performing arts" },
//       { _id: 231, name: "Radio" },
//       { _id: 232, name: "Sports" },
//       { _id: 233, name: "Theatre" },
//     ],
//   },
// ];

// export default InterestsData;