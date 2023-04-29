import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9fca5c816abc4c4f99bb5e548204dd4d",
  },
});

export { CanceledError };
