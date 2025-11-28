module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],
  roots: ["<rootDir>/tests"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
};
