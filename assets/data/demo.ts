import tailwind from "tailwind-rn";
import { DataT } from "../../types";
import IMAGE_01 from "../images/01.jpeg";
import IMAGE_02 from "../images/02.jpeg";
import IMAGE_03 from "../images/03.jpeg";
import IMAGE_04 from "../images/04.jpeg";
import IMAGE_05 from "../images/05.jpeg";
import IMAGE_06 from "../images/06.jpeg";
import IMAGE_07 from "../images/07.jpeg";
import IMAGE_08 from "../images/07.jpeg";
import IMAGE_09 from "../images/09.jpeg";
import IMAGE_10 from "../images/10.jpeg";
import IMAGE_A1 from "../images/a1.jpg";
import IMAGE_A2 from "../images/a2.jpg";
import IMAGE_A3 from "../images/a3.jpg";
import IMAGE_A4 from "../images/a4.jpg";
import IMAGE_A5 from "../images/mom1.png";
import IMAGE_A6 from "../images/mom2.png";
import IMAGE_A7 from "../images/mom3.png";


const randomize = (min: number, max: number) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

const nameChoices = ['Vivien Lau', 'Emily Chu', 'Lam Wai Hin', 'Yu Chung Yuen', 'Hayley Scott', 'Rubaiyat Quader', 'Lee Kin', 'Aaliya Raza']
const imageNames =  [IMAGE_01,IMAGE_02,IMAGE_03,IMAGE_04,IMAGE_05,IMAGE_06,IMAGE_07,IMAGE_08,IMAGE_09,IMAGE_10];
const interests = ['Micromentorship', 'Working Mum', 'Mental Health', 'Pregnancy', 'Motherhood', 'New Mom', 'Open to Work', 'Hiking', 'Yoga', 'Career', 'Professionalism']
const description = ['New Mother. School teacher for 5 years, now at home. Hoping to talk about post-partum depression.', 'Part-time Yoga/Pilates instructor. Life style Blogger. Full time mother of 3 daughters. ','Hi! I just got laid off for COVID-19, looking to get mentored in new professions.', 'Gynecologist out here- just trying to help out other women!', 'Full time accountant. Play piano. Part time mother of 3yr old boy.']



const nameChoicesForProfile = ['French School', 'Sai Kung Yoga Center', 'Sheung Wan Day Care']
const imageNamesForProfile =  [IMAGE_A5,IMAGE_A6,IMAGE_A7];
//const interestsF = ['Micromentorship', 'Mental Health', 'Pregnancy', 'Motherhood', 'New Mom', 'Open to Work', 'Hiking', 'Yoga', 'Career', 'Professionalism']
//const description = ['New Mother. School teacher for 5 years, now at home. Hoping to talk about post-partum depression.', 'Hi! I just got laid off for COVID-19, looking to get mentored in new professions.', 'Gynecologist out here- just trying to help out other women!']
const data: DataT[] = nameChoices.map((name, index) => {
  const randomizedImageNumber = randomize(1,10);
  const interestStart = randomize(0,6);
  const interestEnd = interestStart+randomize(2,3)
  return {
    id: index,
    name: name,
    match: randomize(0,99).toString(),
    image: imageNames[randomize(0,9)],
    isOnline: true,
    description:
      description[randomize(0,2)],
    message:
      "Hey, can we talk about your new profession today? I would love to know more!",
    flavours:"adj",
    interests: interests.slice(interestStart, interestEnd)
  }
})

const newImages =  [IMAGE_A5, IMAGE_A6, IMAGE_A7, IMAGE_A3];


const profileData: DataT[] = [0,1,2,3].map((index) => {
  const randomizedImageNumber = randomize(1,10);

  return {
    id: index,
    name: nameChoicesForProfile[index],
    match: randomize(0,99).toString(),
    image: newImages[index],
    isOnline: true,
    description:
      "Service customised just for your needs.",
    message:
      "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
    flavours:"adj",
  }
})
export { profileData }

export default data;
