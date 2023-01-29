import bcrypt from "bcrypt";
import db from "../database/db.js";
import { v4 as uuidV4 } from "uuid"

export async function signUp(req, res) {
    const { name, email, password } = req.body;

    try {
        const emailExists = await db.collection("users").findOne({ email });
        if (emailExists) return res.status(409).send("Email already in use.");

        const hashPassword = bcrypt.hashSync(password, 10);
        await db.collection("users").insertOne({ name, email, password: hashPassword, permission: "customer" });

        res.status(201).send("Created.");
    } catch (err) {
        console.log(err);
        return res.status(500).send('Database error.');
    }
}

export async function signIn(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email });
        const checkPassword = bcrypt.compareSync(password, user.password);

        if (user && checkPassword) {
            const token = uuidV4();

            await db.collection("sessions").insertOne({ userId: user._id, token, permission: user.permission });

            res.send({token, name: user.name});
        } else {
            res.status(401).send("Incorrect email or password, login failed.");
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send('Database error.');
    }
}