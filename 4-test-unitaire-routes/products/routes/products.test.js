const axios = require("axios");

describe("Test products endpoints", () => {
  let reqData = {
    category: "robe",
    description: "Robe fleurie courte à manches longues",
    image:
      "https://images.pexels.com/photos/7682670/pexels-photo-7682670.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    lat: 1.2,
    lng: 1.1,
    name: "Robe",
    price: 35,
    richDescription:
      "Robe fleurie courte à manches longues imprimé fond marine BENETTON",
    status: true,
    user: "z9KGO80RUxs9CEqNYv59",
  };
  it("get all products", async () => {
    const res = await axios({
      url: "http://localhost:5001/trybuy-d42d2/us-central1/api/v1/products",
      method: "GET",
    });
    expect(res.status).toBe(200);
  });
  it("post new order", async () => {
    const res = await axios.post(
      "http://localhost:5001/trybuy-d42d2/us-central1/api/v1/products",
      reqData
    );
    expect(res.status).toBe(200);
  });
  it("get order", async () => {
    const res = await axios({
      url: "http://localhost:5001/trybuy-d42d2/us-central1/api/v1/products?id=tvbn4iHRgl0IEyxQIl1e",
      method: "GET",
    });
    expect(res.status).toBe(200);
  });
});
