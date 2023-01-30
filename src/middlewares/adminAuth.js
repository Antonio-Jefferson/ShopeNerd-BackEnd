import db from "../database/db.js";

export default async function adminAuth(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return res.status(422).send("informe o token!")
    try {
        const session = await db.collection("sessions").findOne({ token });
        if (!session) return res.status(422).send("Session failed.")
        if (session.permission !== "admin") return res.status(401).send("Permission denied!");
        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send("Database error.");
    }
}

