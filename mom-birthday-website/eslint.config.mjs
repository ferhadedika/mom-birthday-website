import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    // eslint-plugin-react's automatic React version detection is not
    // compatible with ESLint 10's rule context API yet, so it's set
    // explicitly here to skip that code path.
    settings: {
      react: { version: '19.2.8' },
    },
  },
]

export default eslintConfig
