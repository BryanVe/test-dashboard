import male_avatar from "./images/avatars/male_avatar.png";
import first_avatar from "./images/avatars/first_avatar.png";

const simulateUsers = () => [
  {
    id: "1",
    firstName: "Gerardo",
    lastName: "Ojeda",
    avatar: male_avatar,
    email: "gojeda@todova.cl",
    password: "tK9w6?_)%t6",
    phoneNumber: "123456789",
    region: "",
    country: "Chile",
  },
  {
    id: "2",
    firstName: "Bryan",
    lastName: "Vera",
    avatar: first_avatar,
    email: "bryan.ve.bv@gmail.com",
    password: "password",
    phoneNumber: "987654321",
    region: "Lima",
    country: "Peru",
  },
];

export default simulateUsers;
