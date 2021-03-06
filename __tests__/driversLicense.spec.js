const isAbleToDrive = require("../src/driversLicense");
describe("Should test the availabiliy to drive based on the age and a valid drivers license", () => {
  test("Should NOT be able to drive with the age of 17", () => {
    expect(isAbleToDrive(17, false)).toMatch(/You are NOT able to drive/);
  });

  test("Should NOT be able to drive with the age of 18 and no drivers License", () => {
    expect(isAbleToDrive(18, false)).toMatch(/You are NOT able to drive/);
  });

  test("Should be able to drive with the age of 18 and with drivers License", () => {
    expect(isAbleToDrive(18, true)).toMatch(/You are able to drive/);
  });

  test("Should NOT be able to drive with the age of 19 and no drivers license", () => {
    expect(isAbleToDrive(19, false)).toMatch(/You are NOT able to drive/);
  });

  test("Should be able to drive with the age of 19 and with drivers License", () => {
    expect(isAbleToDrive(19, true)).toMatch(/You are able to drive/);
  });

  test("Should return the warning message with the age = null", () => {
    expect(isAbleToDrive(null, true)).toMatch(/You are NOT able to drive/);
  });
});
