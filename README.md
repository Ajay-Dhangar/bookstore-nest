# Getting Started with NestJS 

Now that you have a basic understanding of what NestJS is, let's get started with creating a new NestJS project. 

Our project is Book Store.

## Step 1: Install NestJS CLI 

To create a new NestJS project, you need to install the NestJS CLI. You can do this by running the following command:

```bash
npx @nestjs/cli new bookstore-nest
```

This command will create a new NestJS project called `bookstore-nest`.

## Step 2: Run the NestJS Project

Once the project is created, navigate to the project directory and run the following command to start the NestJS server:

```bash
cd bookstore-nest
npm run start
```

This will start the NestJS server on `http://localhost:3000`.

## Step 3: Create a New Module

Now that the project is up and running, let's create a new module called `books`. To do this, run the following command:

```bash
nest generate module books
```

This command will create a new module called `books` in the project. 

## Step 4: Create a New Controller

Next, let's create a new controller called `books` inside the `books` module. To do this, run the following command:

```bash
nest generate controller books
```

This command will create a new controller called `books` inside the `books` module.

## Step 5: Create a New Service

Finally, let's create a new service called `books` inside the `books` module. To do this, run the following command:

```bash
nest generate service books
```

This command will create a new service called `books` inside the `books` module.

That's it! You have now created a new NestJS project and added a new module, controller, and service to the project. You can now start building your Book Store application using NestJS.