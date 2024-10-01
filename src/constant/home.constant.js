import { CiLocationOn } from "react-icons/ci";
import { MdOutlineSpeed } from "react-icons/md";
import { RiFileList3Line } from "react-icons/ri";

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
    designation: "Designer",
    img: "https://i.ibb.co.com/wYhRwbf/avatar-3.png",
    name: "Daniyal Sppra",
    country: "Newyork",
    comment: `It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.`,
  },
  {
    id: 2,
    designation: "Developer",
    img: "https://i.ibb.co.com/nR06608/avatar-2.png",
    name: "Natasha D",
    country: "Salt Lake City",
    comment: `It is professional, considers everyone's time, can think about the  There are many variations of passages.`,
  },
  {
    id: 3,
    designation: "Designer",
    img: "https://i.ibb.co.com/LzQVfwL/avatar-1.png",
    name: "Jack Sparrow",
    country: "San Diego",
    comment: `It is professional, considers everyone's time, can think about the  There are many  passages whole probls small niche, friendly.`,
  },
  {
    id: 4,
    designation: "Designer",
    img: "https://i.ibb.co.com/yNmcCNZ/avatar-2.png",
    name: "Daniyal Sppra",
    country: "Newyork",
    comment: `It is professional, considers everyone's time, can think about the  There are many variations of passages whole probls small niche, friendly.`,
  },
];

const popularDishesData = [
  {
    id: 1,
    img: "https://i.ibb.co.com/0j6HTvX/popular-dish-1.png",
    title: "Chicken Manjoori",
    description: `Lorem Ipsum is that it has a more-or-less normal`,
    price: 15,
  },
  {
    id: 2,
    img: "https://i.ibb.co.com/PD8NKq4/popular-dish-2.jpg",
    title: "Chicken Manjoori",
    description: `Lorem Ipsum is that it has a more-or-less normal`,
    price: 15,
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/1dwTPmW/popular-dish-3.jpg",
    title: "Chicken Manjoori",
    description: `Lorem Ipsum is that it has a more-or-less normal`,
    price: 15,
  },
  {
    id: 4,
    img: "https://i.ibb.co.com/8sc7k8J/popular-dish-4.jpg",
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
    img: "https://i.ibb.co.com/khcDHdM/blog-image-1.jpg",
    date: "Feb 22, 2022",
    restaurant: "Restaurants",
  },
  {
    id: 2,
    title: "Elegant Dessert: 10 Tips How to Make It at Home",
    description:
      "Capitalize on low-hanging fruit to identify a ballpark value added matrix economically and the creative activity to beta test override the food quality.",
    img: "https://i.ibb.co.com/yq0KTbH/blog-image-2.jpg",
    date: "Feb 22, 2022",
    restaurant: "Restaurants",
  },
];

const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About", path: "/about" },
  { id: 3, title: "Menu", path: "/menu" },
  { id: 4, title: "Reservation", path: "/reservation" },
  { id: 5, title: "Gallery", path: "/gallery" },
  { id: 6, title: "Blog", path: "/blog" },
  { id: 7, title: "Contact", path: "/contact" },
];

export { storyList, testimonialData, popularDishesData, blogData, navItems };
