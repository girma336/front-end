import React from "react";
import HelpGuideSection from "@/components/help-menu/help-section/HelpGuideSection";

interface HelpGuidePageProps {
  params: { category: string };
}

const MenuDetails = ({ params: { category } }: HelpGuidePageProps) => (
  <HelpGuideSection sectionId={parseInt(category, 10)} />
);

export default MenuDetails;
