import { test, expect } from "@playwright/test";
let token;
test.describe("Challenge", () => {
  test.beforeAll(async ({ request }, testinfo) => {
    let r = await request.post(`${testinfo.project.use.apiURL}/challenger`);
    const headers = r.headers();
    console.log(`${testinfo.project.use.apiURL}${headers.location}`);
    token = headers["x-challenger"];
  });
  test.only("получить токен", async ({ request }, testinfo) => {
    let r = await request.get(`${testinfo.project.use.apiURL}/challenges`, {
      headers: { "X-CHALLENGER": token },
    });
    const body = await r.json();
    expect(body.challenges.length).toBe(59);
  });
});
