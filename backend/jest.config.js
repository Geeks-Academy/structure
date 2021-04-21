module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: [
    '<rootDir>/dist/', 
    '<rootDir>/__tests__/setup.ts'
  ],
  setupFilesAfterEnv: ['./__tests__/setup.ts']
}
