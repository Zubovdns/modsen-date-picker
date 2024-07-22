module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: ['src/utils/**/*.ts'],
	coverageDirectory: 'coverage/utils',
	coverageReporters: ['html', 'text'],
	testMatch: ['<rootDir>/src/utils/**/*.(test|spec).ts'],
};
