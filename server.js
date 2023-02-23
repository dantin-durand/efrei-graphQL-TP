import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import schema from './app/Types/index.js';
import root from './app/Controllers/index.js';

const app = express();

app.use(express.json());

app.use('/gql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
