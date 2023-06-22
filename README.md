DOCUMENTATION:

ERD: https://utfs.io/f/63f95030-e9cf-4127-b366-b1eb4e5e5d99_car_rental_erd.JPG

The website display the avalaible cars with its details and picture. The website allows the customers to rent the car by selecting the date of his own choice , 
the website first makes sure that if the car is avalaible or according to the dates. The website allows the admin to delete the car from the website, and also can upload a new car for renting it to the customer
by taking all the details neccessary. 

Frontend is built usig nextjs with typescript and tailwind css 

Rest APIs are used to int4eract with database 

mysql database has been used to stroed the details 

there are 3 tables Cars, customer, and rentals.
 
Rental table has 1:M cars and customers to store the rent details of cars.;





This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
