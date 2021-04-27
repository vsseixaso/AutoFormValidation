import axios from "axios";

const METADATA_URL = "http://localhost:8000/metadata/";

export const getMetadata = (tableName) => {
  return axios
    .get(METADATA_URL + tableName)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
