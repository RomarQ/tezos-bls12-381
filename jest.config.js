module.exports = {
    roots: ['<rootDir>/tests'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '.*.test\\.ts$',
    moduleFileExtensions: ['js', 'ts'],
};
