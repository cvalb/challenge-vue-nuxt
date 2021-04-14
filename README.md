# Vue.js + Nuxt.js Front-end challenge

Read this in other language: [English](https://github.com/cvalb/challenge-vue-nuxt/blob/main/README.md), [Portuguese](https://github.com/cvalb/challenge-vue-nuxt/blob/main/README.pt.md)

## Description

This project consists of a single page application that searches Near Earth Objects calculations by a given date, shows the daily biggest, fastest and closest objects that missed the Earth and you can save the objects as favorites to consult it's data later.

I'm using [NASA's Asteroid NeoWs API](https://api.nasa.gov/). All it's data is from the [NASA JPL Asteroid team](http://neo.jpl.nasa.gov/)

## Instalation

1. Install Node dependencies

        npm install

## Recommended for a better experience*:

- generate an API key at [https://api.nasa.gov/](https://api.nasa.gov/)
- replace the const key @ services/neowsApi.js line 2
		- const key = "DEMO_KEY" // replace DEMO_KEY with your API key here;

*The demonstration key from NASA's API site has 30 uses per hour, 50 per day for all NASA's APIs. With a generated key, the limit is 1000 per hour.

## Objective

This project is a challenge sent by a job offer. This is my first project using Vue.js and Nuxt.js.

The challenge's objective was to create a responsive page, using at least 5 components and at least 2 of them integrating any public API.

## 1.0

Challenge completion.

### Possible implementations

- Load more close approach calculations when opening the Neo modal;
- Deal with API fetching errors;