import axios from "axios";

axios.defaults.baseURL = "https://youtube.googleapis.com/youtube/v3";

const apiKey = process.env.REACT_APP_API_KEY;

/**
 * @param {string} channelId
 * @param {number} amount
 * @returns res.data.items
 */
const getChannelRecentVideos = async (channelId, amount) => {
  const params = {
    key: apiKey,
    part: "snippet",
    channelId: channelId,
    order: "date",
    maxResults: amount,
  };

  try {
    const response = await axios.get("/search", { params });
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    console.log("error", error);
  }

  // axios
  //   .get("/search", { params })
  //   .then((res) => {
  //     console.log(res.data.items);
  //     return res.data.items;
  //   })
  //   .catch((error) => console.log("error", error));
};

/**
 * @param {number} amount 1~50 의 숫자
 * @returns res.data.items
 */
const getGeneralMostPopularVideos = async (amount) => {
  const params = {
    key: apiKey,
    part: "snippet",
    chart: "mostPopular",
    regionCode: "kr",
    maxResults: amount,
  };

  try {
    const response = await axios.get("/videos", { params });
    console.log(response.data.items);
    return response.data.items;
  } catch (error) {
    console.log("error", error);
  }
};

export { getChannelRecentVideos, getGeneralMostPopularVideos };
