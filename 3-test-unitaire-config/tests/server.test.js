const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://david:fcbTdfrVuCM7ocUO@clusterdavid.shdja.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db_name = "myFirstDatabase";
describe("insert", () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
    });
    db = await connection.db(db_name);
  });

  afterAll(async () => {
    await db.collection("tests").deleteMany();
    await connection.close();
  });

  it("should insert a doc into collection", async () => {
    const tests = db.collection("tests");

    const mockUser = { _id: "example_test_id", name: "John_test" };
    await tests.insertOne(mockUser);

    const insertedUser = await tests.findOne({ _id: "example_test_id" });
    expect(insertedUser).toBeDefined();
    expect(insertedUser).toEqual(mockUser);
  });
});
