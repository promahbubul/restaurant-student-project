import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";
import avatar1 from "../assets/images/avatar/avatar-1.svg";
import avatar2 from "../assets/images/avatar/avatar-2.svg";
import avatar3 from "../assets/images/avatar/avatar-3.svg";
import popularDishImage1 from "../assets/images/popular-dishes/popular-dish-1.png";
import popularDishImage2 from "../assets/images/popular-dishes/popular-dish-2.jpg";
import popularDishImage3 from "../assets/images/popular-dishes/popular-dish-3.jpg";
import popularDishImage4 from "../assets/images/popular-dishes/popular-dish-4.jpg";
import blogImage1 from "../assets/images/blog/blog-image-1.jpg";
import blogImage2 from "../assets/images/blog/blog-image-2.jpg";

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

const popularDishesData = [
  {
    id: 1,
    img: popularDishImage1,
    title: "Chicken Manjoori",
    description: `Lorem Ipsum is that it has a more-or-less normal`,
    price: 15,
  },
  {
    id: 2,
    img: popularDishImage2,
    title: "Chicken Manjoori",
    description: `Lorem Ipsum is that it has a more-or-less normal`,
    price: 15,
  },
  {
    id: 3,
    img: popularDishImage3,
    title: "Chicken Manjoori",
    description: `Lorem Ipsum is that it has a more-or-less normal`,
    price: 15,
  },
  {
    id: 4,
    img: popularDishImage4,
    title: "Chicken Manjoori",
    description: `Lorem Ipsum is that it has a more-or-less normal`,
    price: 15,
  },
];

const blogData = [
  {
    id: 1,
    title: "The Most Popular Delicious Food Of Mediterranean Cuisine",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    img: blogImage1,
    date: "Feb 22, 2022",
    restaurant: "Restaurants",
  },
  {
    id: 2,
    title: "Elegant Dessert: 10 Tips How to Make It at Home",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    img: blogImage2,
    date: "Feb 22, 2022",
    restaurant: "Restaurants",
  },
];

export { storyList, testimonialData, popularDishesData, blogData };
