import supertest from "supertest";
import { app, server } from "../../../server.js";

const ROUTE = "/impact/house";

describe("houseRoute() #ut", () => {
  let request = supertest(app);

  afterAll((done) => {
    done();
    server.close();
  });

  describe("Given that one or more required parameters are missing", () => {
    let response;
    beforeEach(async () => {
      // Act
      response = await request.get(`${ROUTE}?type=naturalGas`);
    });

    it("should return status 400", async () => {
      // Assert
      expect(response.status).toEqual(400);
    });

    test("should return a missing message in the body", async () => {
      // Assert
      expect(response.body.error).toContain("missing");
    });
  });

  // Ensure that calculations are correct
  describe.each([
    ["electric", 5, 3.5], // type, input, expected output
    ["naturalGas", 1, 6.6],
    ["fuelOil", 3.4, 149.296],
    ["lpg", 7, 180.185],
    ["waste", 6.8, 206.581],
    ["water", 9.42, 1292.8],
  ])(
    "Given that type %s has value %d and all parameters are correct",
    (type, value, expected) => {
      let response;
      beforeEach(async () => {
        // Act
        response = await request.get(`${ROUTE}?type=${type}&input=${value}`);
      });

      it("should return status 200", () => {
        // Assert
        expect(response.status).toBe(200);
      });

      it(`should return emission of ${expected}`, () => {
        // Assert
        expect(response.body?.emission).toBeCloseTo(expected, 2);
      });
    }
  );
});
