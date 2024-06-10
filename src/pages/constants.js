import ukImg from "../assets/images/uk.png";
import vocab from "../assets/images/vocab.png";
import bee from "../assets/images/bee.png"
import yasmine from "../assets/images/yasmin.jpg"
import guy from "../assets/images/guy.jpg"
import rachel from "../assets/images/rachel.jpg"
import adam from "../assets/images/adam.jpg"
import sarah from "../assets/images/sarah.jpg"

export const lessonProgress = [
  {
    imgUrl: ukImg,
    percentage: 60,
    text: "Speaking 101",
    frequency: 30,
    imgAlt: "uk flag",
  },
  {
    imgUrl: vocab,
    percentage: 60,
    text: "New words",
    frequency: 90,
    imgAlt: "vocab icon",
  },
  {
    imgUrl: bee,
    percentage: 60,
    text: "Spellings",
    frequency: 30,
    imgAlt: "spelling icon",
  },
];

export const leaders = [
  { name: "Yasmine Lee", country: "Taiwan", imgUrl: yasmine, score: 1230, altImg: "Human portrait"},
  { name: "Guy Hakins", country: "Spain", imgUrl: guy, score: 1130, altImg: "Human portrait" },
  { name: "Adam Collins", country: "Niger", imgUrl: adam, score: 2430, altImg: "Human portrait" },
  { name: "Rachel Durray", country: "Ghana", imgUrl: rachel, score: 1330, altImg: "Human portrait" },
  { name: "Sarah Summer", country: "Nigeria", imgUrl: sarah, score: 3130, altImg: "Human portrait" },
];
