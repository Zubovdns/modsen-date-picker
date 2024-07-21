module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	collectCoverage: true,
	collectCoverageFrom: ['src/utils/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage',
	coverageReporters: ['html', 'text'],
};
