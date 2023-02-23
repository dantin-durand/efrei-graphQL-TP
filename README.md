# 🗿 Efrei GraphQL TP

## 🔧 Installation

1. Clone the repository
2. Install the dependencies with `yarn`
3. Edit the `.env` file with your database credentials
4. Run the migrations and seeders with `yarn database:initialize`
5. Start the server with `nodemon` or `node server.js`

## 🚀 Usage

If you want to use the GraphQL Playground, you can access it at `http://localhost:3000/graphql`

## 🕵️‍♀️ Tests

For run tests, use `yarn test`

**⚠️ This command reset the database and run all tests.**

## 📚 Architecture

This is the project architecture:

```bash
├── server.js
├── app/
│   ├── Controllers/
│   │   ├── ParcoursController.js
│   │   └── ...
│   └── Types/
│       ├── Parcours/
│       │   ├── parcours.type.js
│       │   ├── parcours.query.js
│       │   └── parcours.mutation.js
│       └── ...
├── helpers/
├── prisma/
├── __tests__/
└── .env
```

## 📝 Authors

Dantin Durand - [https://github.com/dantin-durand](https://github.com/dantin-durand)
