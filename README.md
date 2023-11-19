# BOOKS STORE

Book Store a web application where you can search, read, add to cart, save to cart and pay for books online

## Contents

- [Tech Stack](#tech-Stack)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [API USED](#API-USED)
- [LIVE DEMO](#LIVE-DEMO)


## Used Technolgy

- React
- Toastify
- React Router
- Redux toolkit
- Redux persist
- Formik and Yup
- Axios (for books api )
- Tailwind CSS (for styling)
- Eslint (for linting)
- Prettier (for code formatting)
- Vite (for development server and build tool)

## Installation

1. Clone this project:

   ```bash
     Clone the project: `git clone https://github.com/UserName/ProjectName.git`
   ```

2. Install the necessary dependencies:

   ```bash
   npm install / yarn
   ```

## Usage

1. Start the application:

   ```bash
   npm run dev / yarn dev
   ```

2. Open your web browser and go to [http://localhost:3000/](http://localhost:3000)

## Features

- You can search by entering book title or author name
- After the search, you can click on one of the cards to be informed about the details of the book
- You can add the books you want to the cart after the search
- If the book is found for sale in the app after the search, you can add it to the cart. If there is no sale of the book, you cannot add to the cart, you can only enter the detail of the book and read the information. For books that say Free, you can enter the detail of the book and read the information or you can go to the relevant page of the book and read it by pressing the read button.
- The books you added appear on the cart page 
- The books you added appear on the cart page. You can delete the book if you wish. You can increase the quantity of the book
- The cart page shows the total price of the books you have added. If you increase the number of instant books, the price information is updated.
- In the Payment phase, the general fee total of the books added to the cart by the user is written. The card information is checked for accuracy and if it is correct, the payment is received and redirected to the main page.
(!Payment information is fake!)

## LIVE DEMO

[https://books-store-com.netlify.app/](https://books-store-com.netlify.app/)

