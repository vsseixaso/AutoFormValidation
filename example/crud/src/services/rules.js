import axios from "axios";

const RULES_URL = "http://localhost:8000/rules/";

export const getRules = (tableName) => {
  return axios
    .get(RULES_URL + tableName)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
