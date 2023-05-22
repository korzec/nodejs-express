/** @type {import('ts-jest').JestConfigWithTsJest} */
const { jsWithBabel } = require('ts-jest/presets')
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    ...jsWithBabel.transform
  }
}
