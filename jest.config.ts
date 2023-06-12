import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  reporters: ['default', 'jest-junit'],
};

export default config;
