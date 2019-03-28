import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-5aaff.firebaseio.com/"
});

export default instance;
