# Playwright Starter

## UIs

* Manual Testing

Chrome / Firefox / Safari

* Automation Testing

[Playwright](https://github.com/microsoft/playwright)

* Benchmark Testing

[Lighthouse](https://github.com/GoogleChrome/lighthouse)

## APIs

* Manual Testing

[Postwoman](https://github.com/liyasthomas/postwoman)

* Automation Testing

[Supertest](https://github.com/visionmedia/supertest) / [WS](https://github.com/websockets/ws)

* Benchmark Testing

[Autocannon](https://github.com/mcollina/autocannon)

## Getting Started

Follow steps to execute this boilerplate.

1. Clone this boilerplate

```bash
$ git clone --depth 1 https://github.com/Shyam-Chen/Playwright-Starter.git <PROJECT_NAME>
$ cd <PROJECT_NAME>
```

2. Install dependencies

```bash
$ yarn install
```

3. Check code quality

```bash
$ yarn lint
```

4. Runs ui tests

```bash
$ yarn ui

# Or single execution of the specified file
$ yarn ui:run ui/hello-world/hello-world.spec.js
```

5. Runs api tests

```bash
$ yarn api

# Or single execution of the specified file
$ yarn api:run api/hello-world/hello-world.spec.js
```

6. Runs benchmarks

```bash
$ yarn bench

# Or single execution of the specified file
$ yarn bench:run benchmark/hello-world/hello-world.js
```
