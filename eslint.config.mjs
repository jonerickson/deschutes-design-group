import next from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-config-prettier';

const eslintConfig = [
  ...next,
  prettier,
  {
    ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**'],
  },
];

export default eslintConfig;
