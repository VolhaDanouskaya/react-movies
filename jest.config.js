module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    moduleFileExtensions: ['js', 'json', 'jsx'],
    setupFiles: ['<rootDir>/enzyme.config.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+test.js?(x)'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\'],
    testURL: 'http://localhost',
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    verbose: false
};