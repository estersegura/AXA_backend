import request from "supertest";
import app from "../../src/app";
import { RESPONSE } from "../constants/error.constant";

describe("Policy routes", () => {
  test("Get list of policies linked to a user name", async () => {
    const res = await request(app).get("/policies/username/Barnett");
    expect(res.body).toEqual(RESPONSE['FORBIDDEN_403']);
  });
});

describe("Policy routes", () => {
    test("Get user linked to a policy number", async () => {
      const res = await request(app).get("/policies/number/6f514ec4-1726-4628-974d-20afe4da130c");
      expect(res.body).toEqual({
        id:"a0ece5db-cd14-4f21-812f-966633e7be86",
        name:"Britney",
        email:"britneyblankenship@quotezart.com",
        role:"admin"});
    });
  });