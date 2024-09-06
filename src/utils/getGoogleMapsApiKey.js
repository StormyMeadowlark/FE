// utils/getGoogleMapsApiKey.js
export const getGoogleMapsApiKey = async () => {
  try {
    const response = await fetch(
      "https://my-garage-ed2e46b8c87b.herokuapp.com/api/v1/maps-api-key/key/footer-map"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.apiKey; // Ensure this matches the key in your backend response
  } catch (error) {
    console.error("Error fetching API key:", error);
    return null;
  }
};
