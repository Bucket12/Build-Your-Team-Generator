// Test provided by and borrowed from class repo. I did not create this nor do I take credit for it.
const Intern = require("../lib/Intern");

test("The fourth constructor argument will set the \"school\" property", () => {
  // Arrange
  const controlVal = "UofA";
  const e = new Intern("Mavis", 1, "test@email.com", controlVal);
  // Assert
  expect(e.school).toBe(controlVal);
});

test("getRole() returns an \"Intern\" string", () => {
  const controlVal = "Intern";
  const e = new Intern("Mavis", 1, "test@email.com", "UofA");
  expect(e.getRole()).toBe(controlVal);
});

test("getSchool() returns a \"school\" string", () => {
  const controlVal = "UofA";
  const e = new Intern("Mavis", 1, "test@email.com", controlVal);
  expect(e.getSchool()).toBe(controlVal);
});
