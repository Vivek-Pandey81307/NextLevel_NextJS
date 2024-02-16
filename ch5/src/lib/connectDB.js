import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export default async ()=>{
    try{
        const DB_OPTIONS = {
            dbName : process.env.DBNAME,
            user : process.env.DBUSERNAME,
            pass : process.env.DBPASSWORD,
            authSource : process.env.DBAUTHSOURCE
        }
        await mongoose.connect (procees.env.DATABASE_URL,DB_OPTIONS)
        console.log('Connected Successfully ...');
    }catch(error){
        console.log(error);
    }
}