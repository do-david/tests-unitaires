const axios = require("axios");

describe("Test orders endpoints", () => {
  let reqData = {
    refodr: 'ref',
    dateodr : 1645710075,
    priceodr: "15",
    adressodr : "address",
    quantityodr: "1",
    statusodr : "active"
  }
  it("get all orders", async () => {
    const res = await axios({
      url: "http://localhost:5001/trybuy-d42d2/us-central1/api/v1/orders",
      method:"GET"
    });
    expect(res.status).toBe(200);
    expect(res.data).toBeTruthy();
  });
  it("post new order", async () => {
    const res = await axios.post("http://localhost:5001/trybuy-d42d2/us-central1/api/v1/orders",reqData);
    expect(res.status).toBe(200);
    expect(res.data).toBeDefined();
  });
  it("get order", async () => {
    const res = await axios({
      url: "http://localhost:5001/trybuy-d42d2/us-central1/api/v1/orders?id=tvbn4iHRgl0IEyxQIl1e",
      method:"GET"
    });
    expect(res.status).toBe(200);
    expect(res.data).toBeTruthy();
  });
});
