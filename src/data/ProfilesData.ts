import TalentPhoto from "@public/profileImage/talent-photo.svg";
import CompanyPhoto from "@public/profileImage/company-photo.svg";
import InverstorPhot from "@public/profileImage/investor-photo.svg";

const profilesData = [
  {
    id: 0,
    name: "Talent",
    description:
      "Talent seeking employment and investment to attract companies.",
    icon: TalentPhoto,
    value: "talent",
  },
  {
    id: 1,
    name: "Company",
    description: "Company seeking to hire talent and attract investment.",
    icon: CompanyPhoto,
    value: "company",
  },
  {
    id: 2,
    name: "Investor",
    description:
      "Investors seeking to invest in a portfolio of companies and talents.",
    icon: InverstorPhot,
    value: "investor",
  },
];

export default profilesData;
