# Apollofy-Hamilton

### Description

Welcome to the Apollofy application.
**This project contain 3 repositories you will require:**
- [FrontEnd structure](https://github.com/Madpug2022/Apollofy-Hamilton)
- [BackEnd Server](https://github.com/Madpug2022/ApolloFy_Back)
- [Stadistics BackEnd Server](https://github.com/Madpug2022/apollofy_stats_back)

This web app simulates the Spotify interface that allows audio streaming over an interactive plataform. <br>
Project is still in development and will be upgraded over time <br>
This projects utilizes the Languages: **HTML, CSS, Typescript.** <br>
Architecture: **React** <br>
Databases: **Mongodb**(base Database)**Postgresql**(stadistics about user) <br>
Libraries: **Auth0, Cloudinary, i18next, antd** <br>

BackEnd: **NodeJs, Express, Prisma, Mongoose**

Responsivenes: **_This application is not currently enabled to run on large monitors, so I recommend using the "inspect" mode and the mobile device functionality to view the application in a range of 390x844_**

### Instalation process
1- Clone the above repositories in your personal computer. <br>
2- You can use the command 'npm run dev' to start the servers and FrontEnd display. <br>
3- Frontend will run in localhost: 5173 by default <br>
4- Backend will run in localhost: 8080 by default <br>
5- Stats server will run in localhost: 8081 by default <br>

### Deployment

You can test the app in vercel! <br>

-[Link to the deployed webpage](apollofy-hamilton.vercel.app)


### Colaborators
This project was made in set with the Hamilton team **@Assembler Institute of Barcelona**: <br>
-[Luis Jover](https://github.com/luisjover) <br>
-[Ali Hourag](https://github.com/ali-hourag) <br>
-[Javier GC](https://github.com/JaviGCK) <br>
-[Ivan Fernandez](https://github.com/ifdezluperena) <br>
 
## Overview
Once you open the app you will be greeted with the Login screen. Our log in system is managed by [**Auth0**](https://auth0.com/) library. 
**We don't store any type of sensitive information about your google account or any other data. All of this is done by Auth0 library, wich is a confident and secure access library.**

![274232436-a68af840-1f83-4449-be4d-6da483cfa00d](https://github.com/Madpug2022/apollofy-frontend/assets/98781462/f29a28d2-4492-42eb-9f83-fa15c3a225b5)

### Main Page
**_This is the main page, you can log out with the up rigth menu, the albums and songs are loaded from the MongoDb database_**

![274239430-642d57ff-7b2c-460d-8d21-de47041894f5](https://github.com/Madpug2022/apollofy-frontend/assets/98781462/3991fba5-375c-404f-aeea-20c6aa7d055a)

### Search Page
**_You can search for albums or users and use the filters_**

![274240583-6eef79d1-dd1e-4f22-b1fa-f3a8f3ccbb92](https://github.com/Madpug2022/apollofy-frontend/assets/98781462/fc3f646a-63fd-42a5-8a05-f991392c9dc0)

### Upload Page
**_You can upload songs you have in your personal computer, they will be stored in Cloudinary_**

![274245832-0012ba15-ff83-4642-a3d7-df0ee1cbf52c](https://github.com/Madpug2022/apollofy-frontend/assets/98781462/49c5e3a1-fe8e-45e2-946e-156989eb9213)

### User and liked Page
**_You can like songs and albums and follow other users and they will be reflected in this page_**

![274247833-7a4da53b-c730-433e-8af4-963bccb590f3](https://github.com/Madpug2022/apollofy-frontend/assets/98781462/9e1e746c-ffc2-464f-be6e-e602ce0ba385)


