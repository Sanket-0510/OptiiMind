import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MindSync",
    icon: web,
  },
  {
    title: "SoulSync",
    icon: mobile,
  },
  {
    title: "ZenFlow",
    icon: backend,
  },
  {
    title: "Breathe",
    icon: creator,
  },
];

const testimonials = [
  {
    testimonial:
      "Unlock the gateway to a vibrant community of wellness seekers on OptiiMind's Discord server, where minds harmonize and grow together.",
    name: "Mohit Kumar",
    designation: " Symphony Director",
    company: "Discord",
    image: "https://e1.pxfuel.com/desktop-wallpaper/153/568/desktop-wallpaper-discord-neon-icon-discord-logo-thumbnail.jpg",
  },
  {
    testimonial:
      "Dive into the captivating world of OptiiMind's Reddit realm, where ideas flourish, discussions ignite, and the collective wisdom of wellness enthusiasts thrives.",
    name: "Sahil Mandi",
    designation: "Realm Guardian",
    company: "Reddit",
    image: "https://www.redditinc.com/assets/images/site/reddit-logo.png",
  },
  {
    testimonial:
      "Embark on a captivating journey through the realm of OptiiMind's Twitterverse, where inspiration takes flight, conversations spark, and wisdom is condensed into 280 characters.",
    name: "Sanket Teli",
    designation: "Tweet Maestro",
    company: "ooptiimind",
    image: "https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg",
  },
];

const projects = [
  {
    name: "MindSync",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    image: carrent,
  },
  {
    name: "SoulSync",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    image: jobit,
  },
  {
    name: "Zenflow",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    image: tripguide,
  },
];

export { services, testimonials, projects };
