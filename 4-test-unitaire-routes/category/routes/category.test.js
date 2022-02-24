const axios = require("axios");

describe("Test category endpoints", () => {
  let reqData = {
    name :"data test"
  }
  it("get all category", async () => {
    const res = await axios({
      url: "http://localhost:5001/trybuy-d42d2/us-central1/api/v1/category",
      method:"GET"
    });
    expect(res.status).toBe(200);
    expect(res.data).not.toBeUndefined();
  });
  it("post new order", async () => {
    const res = await axios.post("http://localhost:5001/trybuy-d42d2/us-central1/api/v1/category",reqData);
    expect(res.status).toBe(200);
    expect(res.data).not.toBeUndefined();
  });
  it("get order", async () => {
    const res = await axios({
      url: "http://localhost:5001/trybuy-d42d2/us-central1/api/v1/category?id=tvbn4iHRgl0IEyxQIl1e",
      method:"GET"
    });
    expect(res.status).toBe(200);
    expect(res.data).not.toBeNull();
  });
});
