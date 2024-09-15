import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import avatar1 from "../assets/images/avatar/avatar-1.svg";
import avatar2 from "../assets/images/avatar/avatar-2.svg";
import avatar3 from "../assets/images/avatar/avatar-3.svg";

const storyList = [
  {
    id: "locate-us",
    icon: CiLocationOn,
    title: "Locate Us",
    description: "Riverside 25, San Francisco, California",
  },
  {
    id: "open-hours",
    icon: MdOutlineSpeed,
    title: "Open Hours",
    description: "Mon To Fri 9:00 AM - 9:00 PM",
  },
  {
    id: "reservation",
    icon: RiFileList3Line,
    title: "Reservation",
    description: "hirestaurantate@gmail.com",
  },
];

const testimonialData = [
  {
    id: 1,
    img: avatar1,
    name: "Daniyal Sppra",
    country: "Newyork",
    comment: `It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.`,
  },
  {
    id: 2,
    img: avatar2,
    name: "Natasha D",
    country: "Salt Lake City",
    comment: `It is professional, considers everyone's time, can think about the  There are many variations of passages.`,
  },
  {
    id: 3,
    img: avatar3,
    name: "Jack Sparrow",
    country: "San Diego",
    comment: `It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.`,
  },
  {
    id: 4,
    img: avatar1,
    name: "Daniyal Sppra",
    country: "Newyork",
    comment: `It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.`,
  },
];

export { storyList, testimonialData };
