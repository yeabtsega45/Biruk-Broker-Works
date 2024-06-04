import content1 from "../Assets/estate2.jpg";
import content2 from "../Assets/Ford.jpeg";
import content3 from "../Assets/g+1.jpg";

const contentData = [
  {
    image: content1,
    title: "Course Study",
    description: "Study on specific bible topics.",
    navigateTo: "/courses",
  },
  {
    image: content2,
    title: "Sabbath School Study",
    description: "Quarterly bible study on a topic.",
    navigateTo: "/sabbathSchool",
  },
  {
    image: content3,
    title: "Devotional Study",
    description: "Daily devotional text study.",
    navigateTo: "/devotion",
  },
];

export default contentData;
