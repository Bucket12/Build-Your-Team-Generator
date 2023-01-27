// Test provided by and borrowed from class repo. I did not create this nor do I take credit for it.
const Manager = require("../lib/Manager");

test("The fourth constructor argument will set the \"officeNumber\" property", () => {
  // Arrange
  const controlVal = 202;
  const e = new Manager("Mavis", 1, "test@email.com", controlVal);
  // Assert
  expect(e.officeNumber).toBe(controlVal);
});

test("getRole() returns a \"Manager\" string", () => {
  // Arrange
  const controlVal = "Manager";
  const e = new Manager("Mavis", 1, "test@email.com", 202);
  // Assert
  expect(e.getRole()).toBe(controlVal);
});

test("getOffice() returns an \"officeNumber\" string", () => {
  // Arrange
  const controlVal = 202;
  const e = new Manager("Mavis", 1, "test@email.com", controlVal);
  // Assert
  expect(e.getOfficeNumber()).toBe(controlVal);
});