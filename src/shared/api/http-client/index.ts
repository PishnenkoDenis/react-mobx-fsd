import ky from "ky";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const kyClient = ky.create({
  prefixUrl: BASE_URL,
});
