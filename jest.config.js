module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'json', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png)$': '<rootDir>/test/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules',
  },
  //   testEnvironment: 'jsdom',
  //   testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+test.js?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  //   testURL: 'http://localhost',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};
