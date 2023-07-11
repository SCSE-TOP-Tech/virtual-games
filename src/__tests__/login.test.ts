// import { Context, createMockContext, MockContext } from "~/jest/context";
//
// let ctx = Context;
// let mockCtx = MockContext;

// beforeEach(() => {
//   mockCtx = createMockContext();
//   ctx = mockCtx as unknown as Context;
// });

import { prismaMock } from "~/jest/singleton";
import { Account } from "~/data/contracts/interfaces/account";
import createUser from "@/resources/prisma/login/createUser";

describe("GET /login", () => {
  it("should create a user with associated account and items", async () => {
    const account: Account = {
      username: "testName",
      password: "testPassword",
      email: "testEmail",
    };

    await createUser(account);
  });
});
