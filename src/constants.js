import ukImg from "./assets/images/uk.png";
import vocab from "./assets/images/vocab.png";
import bee from "./assets/images/bee.png";
import yasmine from "./assets/images/yasmin.jpg";
import guy from "./assets/images/guy.jpg";
import adam from "./assets/images/adam.jpg";
import listening from "./assets/images/listening.png";
import reading from "./assets/images/reading.png";
import speaking from "./assets/images/speaking.png";
import writing from "./assets/images/writing.png";

export const lessonProgress = [
  {
    id: 1,
    imgUrl: ukImg,
    percentage: 60,
    text: "Speaking 101",
    frequency: 30,
    imgAlt: "uk flag",
  },
  {
    id: 2,
    imgUrl: vocab,
    percentage: 60,
    text: "New words",
    frequency: 90,
    imgAlt: "vocab icon",
  },
  {
    id: 3,
    imgUrl: bee,
    percentage: 60,
    text: "Spellings",
    frequency: 30,
    imgAlt: "spelling icon",
  },
];

export const leaders = [
  {
    id: 1,
    name: "Adam Collins",
    country: "Niger",
    imgUrl: adam,
    score: 1110,
    altImg: "Human portrait",
  },
  {
    id: 2,
    name: "Yasmine Lee",
    country: "Taiwan",
    imgUrl: yasmine,
    score: 1230,
    altImg: "Human portrait",
  },
  {
    name: "Guy Hawkins",
    country: "Spain",
    imgUrl: guy,
    score: 1130,
    altImg: "Human portrait",
  },
];

export const skills = [
  {
    id: 1,
    name: "Reading",
    percentage: 100,
    status: "Completed",
    imgUrl: reading,
  },
  {
    id: 2,
    name: "Writing",
    percentage: 85,
    status: "Good work",
    imgUrl: writing,
  },
  {
    id: 3,
    name: "Speaking",
    percentage: 100,
    status: "Completed",
    imgUrl: speaking,
  },
  {
    id: 4,
    name: "Listening",
    percentage: 70,
    status: "Good work",
    imgUrl: listening,
  },
];
