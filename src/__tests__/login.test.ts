import { Context, createMockContext, MockContext } from "../../jest/context";
import { Account } from "~/data/contracts/interfaces/account";
import createUser from "../resources/prisma/login/createUser";

let ctx: Context;
let mockCtx: MockContext;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

describe("GET /login", () => {
  it("should create a user with associated account and items", async () => {
    const account: Account = {
      username: "testName",
      password: "testPassword",
      email: "testEmail",
    };

    await expect(createUser(account, ctx)).resolves.toEqual({
      name: account.username,
      password: account.password,
      email: account.email,
    });
  });
});
