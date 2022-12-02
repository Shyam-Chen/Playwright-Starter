# Playwright Starter

:carousel_horse: A boilerplate for Test automation, Playwright, Lighthouse, Autocannon, and TypeScript.

## GUI Testing

Automated web-based graphical user interface testing:

  - Automation Testing: [Playwright](https://github.com/microsoft/playwright)
    - Specification: `gui/**/*.spec.ts`
  - Benchmark Testing: [Lighthouse](https://github.com/GoogleChrome/lighthouse)
    - Measurement: `gui/**/*.meas.ts`

## API Testing

Automated application programming interface Testing:

  - Automation Testing: [Playwright](https://github.com/microsoft/playwright)
    - Specification: `api/**/*.spec.ts`
  - Benchmark Testing: [Autocannon](https://github.com/mcollina/autocannon)
    - Measurement: `api/**/*.meas.ts`

## Getting Started

Follow steps to execute this boilerplate.

1. Install dependencies

```bash
$ pnpm install
```

2. Runs end-to-end tests

```bash
$ pnpm e2e
```
