const path = require('path');

module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		'\\.(css|less|scss|sss|styl)$': path.join(
			__dirname,
			'node_modules/jest-css-modules'
		),
	},
	testMatch: [path.join(__dirname, 'src/components/**/*.(test|spec).{ts,tsx}')],
	moduleNameMapper: {
		'^@src/(.*)$': '<rootDir>/src/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@stories/(.*)$': '<rootDir>/src/stories/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@constants/(.*)$': '<rootDir>/src/constants/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@icons/(.*)$': '<rootDir>/src/assets/icons/$1',
		'^@styles/(.*)$': '<rootDir>/src/styles/$1',
		'\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
	},
};
