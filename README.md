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
```
docker run -it -v $PWD:/e2e -v /home/goat/projects/map-lab:/map-lab -w /e2e --entrypoint='cypress' cypress/included:3.2.0 run
```