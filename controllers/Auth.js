import bcrypt from "bcrypt";
import db from "../database/db.js";

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    try {
        const emailExists = await db.collection("users").findOne({ email });
        if (emailExists) return res.status(409).send("Email already in use.");

        const hashPassword = bcrypt.hashSync(password, 10);
        await db.collection("users").insertOne({ name, email, password: hashPassword, permission:"customer"});

        res.status(201).send("Created.");
    } catch (err) {
        console.log(err);
        return res.status(500).send('Database error.');
    }
}