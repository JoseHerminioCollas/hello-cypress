# Hello Cypress

A place to write scripts for Cypress.

## Install

```
git clone https://github.com/JoseHerminioCollas/hello-cypress.git
```

## Run

Run Cypress with Docker according to this blog, [Run Cypress with a single Docker command](https://www.cypress.io/blog/2019/05/02/run-cypress-with-a-single-docker-command/)
```
docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.2.0
```