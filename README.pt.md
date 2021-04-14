# Desafio de Vue.js + Nuxt.js Front-end

Read this in other language: [English](https://github.com/cvalb/challenge-vue-nuxt/blob/main/README.md), [Portuguese](https://github.com/cvalb/challenge-vue-nuxt/blob/main/README.pt.md)

## Descrição

Este projeto consiste em uma SPA que busca cálculos da distância de passagem de Near Earth Objects (Objetos Próximos à Terra) usando como parâmetro uma data, mostra os objetos maior, mais rápido e mais perto que passaram pela terra e você pode salvar um objeto como favorito para consultar mais tarde.

Estou usando a [API Asteroid NeoWs da NASA](https://api.nasa.gov/). Todos os dados são do [time Asteroid da NASA JPL](http://neo.jpl.nasa.gov/)

## Instalação

1. Instalar as dependências do node

        npm install

## Recomendado para uma melhor experiência*:

- gere uma nova chave de API em [https://api.nasa.gov/](https://api.nasa.gov/)
- troque a chave em const key @ services/neowsApi.js line 2

	- const key = "DEMO_KEY" // replace DEMO_KEY with your API key here;

*A chave de demonstração disponível no site de APIs da NASA limita a 30 usos por hora e 50 por dia para todas as APIs da NASA. Com a chave gerada, o limite é de 1000 por hora.

## Objetivo

Esse projeto nasceu de um desafio enviado por uma proposta de emprego. Este é meu primeiro projeto usando Vue.js e Nuxt.js.

O objetivo do desafio era criar uma página responsiva, usando pelo menos 5 componentes e 2 deles fazendo interação com uma API pública.

## 1.0

Desafio completo

### Possiveis implementações

- Carregar mais dados de encontros próximos no modal de Neo;
- Lidar com as respostas de erro da API;