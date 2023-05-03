import request from "supertest";

import app from "../../src/app";

describe("Client routes", () => {
  test("Get client by id", async () => {
    const res = await request(app).get("/clients/id/a0ece5db-cd14-4f21-812f-966633e7be86");
    expect(res.body).toEqual({id:"a0ece5db-cd14-4f21-812f-966633e7be86",
        name:"Britney",
        email:"britneyblankenship@quotezart.com",
        role:"admin"
    });
  });
});

describe("Client routes", () => {
    test("Get client by name", async () => {
      const res = await request(app).get("/clients/username/Merrill");
      expect(res.body).toEqual({id:"44e44268-dce8-4902-b662-1b34d2c10b8e",
          name:"Merrill",
          email:"merrillblankenship@quotezart.com",
          role:"user"
      });
    });
  });