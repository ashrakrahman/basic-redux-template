import axios from "axios";

const homeDataApi = async (currentPage = 0) => {
  try {
    console.log("JJ", currentPage);
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=startups&page=" + currentPage
    );

    return Promise.resolve(response?.data);
  } catch (error) {
    console.log(error);
    Promise.reject(error);
  }
};

const scaffold = {
  homeDataApi,
};

export default scaffold;
