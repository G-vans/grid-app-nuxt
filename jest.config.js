module.exports = {
    moduleFileExtensions: ['js', 'json', 'vue'],
    transform: {
      '^.+\\.js$': 'babel-jest',
      '.*\\.(vue)$': 'vue-jest',
    },
    testMatch: ['**/tests/**/*.spec.(js|jsx|ts|tsx)'],
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/components/**/*.vue', '<rootDir>/pages/**/*.vue'],
  };
  