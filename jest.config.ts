export default {
  clearMocks: true,
  collectCoverage: true,
  testRegex: '.*\.spec\.ts',
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest'
  }
};