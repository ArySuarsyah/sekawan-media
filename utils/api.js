import http from "./http";
const getForTicket = async () => {
  try {
    const { data } = await http().get('/user');
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default getForTicket;
