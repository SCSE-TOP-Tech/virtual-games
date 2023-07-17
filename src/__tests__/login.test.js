const { PrismaClient } = require("@prisma/client");

describe("GET /login", () => {
  it("should create a user with associated account and items", async () => {
    const mockPrisma = new PrismaClient();
    jest.mock("@prisma/client", () => ({
      PrismaClient: jest.fn(() => mockPrisma),
    }));
    //
    // jest.mock("@prisma/client", () => {
    //   jest.fn(() => mockPrisma);
    // });
    //
    // const response = await request(app).post("/login");
    // expect(response.status).toBe(200);
    // console.log(response);
  });
});
