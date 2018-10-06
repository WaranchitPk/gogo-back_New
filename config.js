require('dotenv').config();

export const dbOptions = {
    host: process.env.db_Host,
    user: process.env.db_User,
    password: process.env.db_Pass,
    port: process.env.db_Port,
    database: process.env.db_Name
};