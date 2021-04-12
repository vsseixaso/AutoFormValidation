import axios from "axios";

const RULES_URL = "http://localhost:8000/rules/";

export const getRules = (tableName) => {
  return axios
    .get(RULES_URL + tableName)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
