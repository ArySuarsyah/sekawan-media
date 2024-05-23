// src/utils/api.js

const fetchDataFromBackend = async () => {
  try {
    const response = await fetch(
      "https://664f049ffafad45dfae1eaf8.mockapi.io/dummySekawan/user"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchDataFromBackend;
