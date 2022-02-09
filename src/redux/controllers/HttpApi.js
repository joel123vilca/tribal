import axios from "axios";

const api = axios.create({
  baseURL: "https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod",
  headers: {
    "X-Api-Key": "zXAzM83cHx5R68UGLrSaL8KfC38CMVG61MdaJj1Q",
    "Content-Type": "application/json",
  },
});

export default api;
