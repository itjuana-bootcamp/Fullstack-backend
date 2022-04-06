const request = require("supertest");

const app = require("../src/index");

describe("Calling /posts with GET", () => {
  test("It shuold response with a 200 status code", async () => {
    const response = await request(app).get("/posts").send();
    expect(response.status).toBe(200);
  });

  test("It should response with an array", async () => {
    const response = await request(app).get("/posts").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("Creating a post without a title", () => {
  test("It should response with a 400 status code", async () => {
    const response = await request(app).post("/posts").send({
      body: "",
    });
    expect(response.status).toBe(400);
  });
});
