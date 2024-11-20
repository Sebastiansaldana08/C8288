module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Cambiar a 'jsdom' para soporte de JSEncrypt
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1'
  }
};
