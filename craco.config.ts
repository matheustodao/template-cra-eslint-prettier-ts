/* eslint-disable import/no-anonymous-default-export */
const path = require('path');
const { ESLINT_MODES } = require('@craco/craco');

const resolve = (arg: string, baseUrl: string = 'src') => (
  path.resolve(__dirname, `${baseUrl}/${arg}`)
);

export default {
  webpack: {
    alias: {
      '@src': resolve(''),
      '@pages': resolve('app/pages/'),
      '@components': resolve('app/components/'),
      '@assets': resolve('app/assets/'),
      '@services': resolve('services/'),
      '@hooks': resolve('hooks/'),
      '@contexts': resolve('contexts/'),
      '@configs': resolve('configs/'),
      '@types': resolve('types/'),
      '@mocks': resolve('mocks/'),
      '@utils': resolve('utils/'),
    },
  },

  jest: {
    configure: {
      moduleNameMapper: {
        '^~(.*)$': '<rootDir>/src$1',
      },
      roots: ['<rootDir>/src/', '<rootDir>/test/'],
      testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).[jt]s?(x)'],
      setupFilesAfterEnv: '<rootDir>/test/setupTests.ts',
    },
  },

  eslint: {
    mode: ESLINT_MODES.file,
  },
};
