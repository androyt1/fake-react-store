import axios from "axios";
export default axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-type": "application/json"
  }
});