# Atlan Query Builder

Atlan Query builder is an application which is used to take sql queries as user input and display data that is received from the backend based on the query. It also holds the list of queries saved by the user which can be used later.

<br/>

# Table of Contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technology Stack](#technology-stack)
4. [Performance Measurement](#performance-measurement)
5. [Authors](#authors)
6. [License](#license)

<br/>

# Demo

[Live Demo](https://stellar-kitsune-bc5c4b.netlify.app/)

<br/>

Please Note:

1. We recommend using this app in Google Chrome
2. Use the app on Laptop/desktop only as of now.

<br/>

# Installation

- Fork or directly clone this repository to your local machine
- Use the `npm` command to install dependencies
- Once the dependencies are finished installing, use the `npm start` command inside the root directory to open the app in your local browser of choice

<br/>

# Technology Stack

We tried to use a completely modern tech stack while testing out some new technologies that we had never used before. This resulted in a fast, performant, and easily-extensible web app that should be fairly future-proof for the coming next several years. We used:

- [React JS](https://reactjs.org/)
- [Material UI](https://mui.com/)

<br/>

# Performance Measurement

I have used some performance enhancement techniques as below.

1. using useCallback to memoize all the funnctions defined in the functional components
2. Usage of lazy loading for table component which has enhanced the performance by 10% from 81 to 91.
   Note: I have used lighthouse to measure the performance.

<br/>

# Authors

- [Anooj Agarwal](https://github.com/anooj-curator)

<br/>

# License

[MIT](https://opensource.org/licenses/MIT)
