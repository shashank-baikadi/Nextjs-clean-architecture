This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.






shashank
 npx create-next-app@latest
 npm run dev

file based routing

 execution - npm run dev --layout.tsx---root layout is rendered ----children will call local host ----page will be rendered 


 React server components 
 ![alt text](image.png)
 ![alt text](image-1.png)

 Nested routing 
 ![alt text](image-2.png)
 ![alt text](image-3.png)

 Dynamic routing
 ![alt text](image-4.png)
 ![alt text](image-5.png)

 Nested dynamic routing
 ![alt text](image-6.png)
 ![alt text](image-7.png)


 catch all segments 
 ![alt text](image-8.png)
 slug is common terminology for url

 private folder 
 ![alt text](image-9.png)

 route Groups
 ![alt text](image-10.png)

 (auth)-using ()will tell next js to vomit out the routes from url

 before -auth -register 
 http://localhost:3000/auth/register 

 after   (auth) -register 
 http://localhost:3000/register 

 Routing Metadata

![alt text](image-11.png)

Navigation



Navigation Programmatically
![alt text](image-12.png)
when clicked on place order we need to redirect to home page
![alt text](image-13.png)
useRouter only works in client component


special file in next.js 
![alt text](image-14.png)
for blog i have implemented loading file 
benefits of loading file 
![alt text](image-15.png)


parallel routes
![alt text](image-16.png)
if one section we wan to have loading we caan achieve it if we want to thrown error screen we can achieve it
![alt text](image-17.png)

sub navigation 
![alt text](image-18.png)

Unmatched routes 
![alt text](image-19.png)
we create default.tsx at the same level as page.tsx if dont we 404 error 
![alt text](image-20.png)

conditional routes 
in complex-dashboard when isloggedIn  is true then only i will be able to see the next page or else we cant 

intercepting routes
![alt text](image-21.png)
![alt text](image-22.png)
imp 
![alt text](image-23.png)

Route Handlers
![alt text](image-24.png)

Route Handlers
![alt text](image-24.png)
intercepting routes
![alt text](image-21.png)
![alt text](image-22.png)

middleware
![alt text](image-25.png)

Rendering 
![alt text](image-26.png)

client side rendering
![alt text](image-27.png)

server side solution 
![alt text](image-28.png)

problem of server side rendering
![alt text](image-29.png)
![alt text](image-30.png)
![alt text](image-31.png)

suspense for ssr
![alt text](image-32.png)

execution of react server side loading sequence
![alt text](image-33.png)

streaming
![alt text](image-34.png)
an example for streaming 
![alt text](image-35.png)

server-only
we have a package npm i server-only which will help use to keep all the api keys,algo,calculation etc hidden if the server-only is used in client side then it will throw an error 

this is to be used at the top for importing the server-only module
import "server-only"

## if you use use client in a component and u have mentioned a child component which is server component but the parent component is client compnent then child will also be client component 
![alt text](image-36.png).
