import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config();

const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
    await mongoClient.connect();
    console.log('Database connection successful.')
} catch (err) {
    console.log("Database connection failed.");
}

const db = mongoClient.db();

export default db;