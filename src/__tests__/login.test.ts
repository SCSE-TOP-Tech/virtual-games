import { Context, createMockContext, MockContext } from "../../jest/context";
import { Account } from "~/data/contracts/interfaces/account";
import createUser from "../resources/prisma/login/createUser";
import { User } from "~/data/contracts/interfaces/user";

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

    const newUser: User = {
      userID: 1,
      name: "testName",
      state: {
        stateID: 0,
        name: "Introduction",
        currentTime: "2023-01-01T19:00:00Z",
      },
      stateID: 0,
    };

    mockCtx.prisma.user.create.mockResolvedValue(newUser);
    console.log(mockCtx.prisma.user.findFirst());

    await expect(createUser(account, ctx)).resolves.toEqual({
      name: account.username,
      password: account.password,
      email: account.email,
    });
  });
});
