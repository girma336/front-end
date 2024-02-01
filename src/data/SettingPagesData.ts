import PublicIcon from "@public/icons/menu-public-icon.svg";
import TalentIcon from "@public/icons/menu-talent-icon.svg";
import InvestorIcon from "@public/icons/menu-investor-icon.svg";
import OnlyMeIcon from "@public/icons/menu-only-me-icon.svg";
import PublicExceptIcon from "@public/icons/menu-public-except-icon.svg";
import SettingNotification from "@public/icons/setting-notification.svg";
import SettingPersonal from "@public/icons/setting-personal.svg";
import SettingPrivacy from "@public/icons/setting-privacy.svg";
import ProfilePhoto from "@public/profileImage/animoji.svg";

export const personal = [
  {
    id: 1,
    title: "My Investors",
    question: "Who can view my investor connections?",
    chosenMenu: "Public",
    answer:
      "Your default audience is set to Public. This will be your audience. But you can always change it.",
  },
  {
    id: 2,
    title: "My Companies",
    question: "Who can see the companies I am associated with?",
    chosenMenu: "Public",
    answer:
      "Your default audience is set to Public. This will be your audience. But you can always change it.",
  },
  {
    id: 3,
    title: "Profile Character",
    question: "Visibility of your chosen profile character?",
    answer: null,
  },
  {
    id: 4,
    title: "Idea Description",
    question: "who can view the description of your ideas?",
    chosenMenu: "Only me",
    answer: "Only me can view the description of my idea.",
  },
  {
    id: 5,
    title: "Matched Network",
    question: "Visibility of networks I am matched with.",
    answer: null,
  },
  {
    id: 6,
    title: "Networks",
    question: "Who can see the networks I am part of?",
    chosenMenu: "Only me",
    answer: "Only me can see the networks I am part of",
  },
];

export const privacy = [
  {
    id: 1,
    title: "Last Seen",
    question: "Who can see your last seen?",
    chosenMenu: "Public",
    answer:
      "Your default audience is set to Public. This will be your audience. But you can always change it.",
  },
  {
    id: 2,
    title: "Status",
    question: "Who can see my current status?",
    chosenMenu: "Public",
    answer:
      "Your default audience is set to Public. This will be your audience. But you can always change it.",
  },
  {
    id: 3,
    title: "Block",
    question: "Who can view the users you have blocked?",
    chosenMenu: "Only me",
    answer:
      "Your default audience is set to Public. This will be your audience. But you can always change it.",
  },
  {
    id: 4,
    title: "Unblock",
    question: "Who can see the users I have unblocked?",
    chosenMenu: "Only me",
    answer:
      "Your default audience is set to Public. This will be your audience. But you can always change it.",
  },
  {
    id: 5,
    title: "Live Location",
    question: "Visibility of my live location? ",
    answer: null,
  },
];

export const menuList = [
  {
    path: "/public",
    title: "Public",
    text: "Anyone on Juubix",
    icon: PublicIcon,
  },
  {
    path: "/talent",
    title: "Talent",
    text: "Only Talent",
    icon: TalentIcon,
  },
  {
    path: "/investor",
    title: "Investor",
    text: "Only Investor",
    icon: InvestorIcon,
  },
  {
    path: "/only-me",
    title: "Only me",
    text: "Only me",
    icon: OnlyMeIcon,
  },
  {
    path: "/public-except",
    title: "Public Except",
    text: "Don't show to some",
    icon: PublicExceptIcon,
  },
];

export const panelLists = [
  {
    id: 1,
    text: "Personal",
    img: SettingPersonal,
  },
  {
    id: 2,
    text: "Privacy",
    img: SettingPrivacy,
  },
  {
    id: 3,
    text: "Notification",
    img: SettingNotification,
  },
];

export const users = [
  {
    id: 1,
    name: "John Doe",
    image: ProfilePhoto,
  },
  {
    id: 2,
    name: "John Doe",
    image: ProfilePhoto,
  },
  {
    id: 3,
    name: "John Doe",
    image: ProfilePhoto,
  },
  {
    id: 4,
    name: "John Doe",
    image: ProfilePhoto,
  },
  {
    id: 5,
    name: "John Doe",
    image: ProfilePhoto,
  },
];
