import supertest from "supertest";
import { app, server } from "../../../server.js";

const ROUTE = "/impact/food";

describe("foodRoute() #ut", () => {
  let request = supertest(app);

  afterAll((done) => {
    done();
    server.close();
  });

  describe("Given that one or more required parameters are missing", () => {
    let response;
    beforeEach(async () => {
      // Act
      response = await request.get(`${ROUTE}?type=meat`);
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
    ["meat", 1.6, 1383.692], // type, input, expected output
    ["dairy", 5.2, 437.076],
    ["fruitsVeggies", 3.4, 22.384],
    ["snacks", 7.53, 720.52],
    ["cerealsBakery", 13.5, 6249.396],
    ["drinks", 2, 74.2],
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
