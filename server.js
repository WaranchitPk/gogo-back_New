import express from 'express';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import mysql from 'mysql';
import myConnection from 'express-myconnection';
import {MainRoute} from './app';
import {dbOptions} from './config';
import moment from 'moment';
const app = express();
const PORT = 9999;

app.use(compress());



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(myConnection(mysql, dbOptions, 'pool'));
MainRoute(app);
app.listen(PORT, () => {
    console.log('listen to port: ', PORT)
});
