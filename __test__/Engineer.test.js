// Test provided by and borrowed from class repo. I did not create this nor do I take credit for it.
const Engineer = require("../lib/Engineer");

test("The fourth constructor argument will set the \"github\" property", () => {
  // Arrange
  const controlVal = "MyGithubName";
  const e = new Engineer("Mavis", 1, "test@email.com", controlVal);
  // Assert
  // Assert
  expect(e.github).toBe(controlVal);
});

test("getRole() returns an \"Engineer\" string", () => {
  // Arrange
  const controlVal = "Engineer";
  const e = new Engineer("Mavis", 1, "test@email.com", "MyGithubName");
  // Assert
  expect(e.getRole()).toBe(controlVal);
});

test("getGithub() returns a \"github\" string", () => {
  // Arrange
  const controlVal = "MyGithubName";
  const e = new Engineer("Mavis", 1, "test@email.com", controlVal);
  //Assert
  expect(e.getGithub()).toBe(controlVal);
});