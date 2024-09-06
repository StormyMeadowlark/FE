export const getGoogleMapsApiKey = async () => {
  try {
    const response = await fetch(
      "https://my-garage-ed2e46b8c87b.herokuapp.com/api/v1/api-maps-key"
    );
    const data = await response.json();
    return data.apiKey;
  } catch (error) {
    console.error("Error fetching API key:", error);
    return null;
  }
};
