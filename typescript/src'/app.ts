import express from 'express';

import userRoute from './router/user router';

const app = express();

app.use('/user', userRoute);

app.listen(process.env.PORT); 