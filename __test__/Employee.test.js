// Test provided by and borrowed from class repo. I did not create this nor do I take credit for it.
const Employee = require("../lib/Employee");

test("When used with the \"new\" keyword, instantiates an Employee object", () => {
  // Arrange
  const e = new Employee();
  // Assert
  expect(typeof(e)).toBe("object");
});

test("The first constructor argument will set the \"name\" property", () => {
  // Arrange
  const name = "Mavis";
  const e = new Employee(name);
  // Assert
  expect(e.name).toBe(name);
});

test("The second constructor argument will set the \"id\" property", () => {
  // Arrange
  const controlVal = 1;
  const e = new Employee("Mavis", controlVal);
  // Assert
  expect(e.id).toBe(controlVal);
});

test("The third constructor argument will set the \"email\" property", () => {
  // Arrange
  const controlVal = "test@email.com";
  const e = new Employee("Mavis", 1, controlVal);
  // Assert
  expect(e.email).toBe(controlVal);
});

test("getName() returns a \"name\" string", () => {
  // Arrange
  const controlVal = "Mavis";
  const e = new Employee(controlVal);
  // Assert
  expect(e.getName()).toBe(controlVal);
});

test("getId() returns an \"id\" integer", () => {
  // Arrange
  const controlVal = 1;
  const e = new Employee("Mavis", controlVal);
  // Assert
  expect(e.getId()).toBe(controlVal);
});

test("getEmail() returns an \"email\" string", () => {
  // Arrange
  const controlVal = "test@email.com";
  const e = new Employee("Mavis", 1, controlVal);
  // Assert
  expect(e.getEmail()).toBe(controlVal);
});

test("getRole() returns an \"Employee\" string", () => {
  // Arrange
  const controlVal = "Employee";
  const e = new Employee("Mavis", 1, "test@email.com");
  // Assert
  expect(e.getRole()).toBe(controlVal);
});