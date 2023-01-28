import db from "../database/db.js";

export default function adminAuth() {
    return async (req, res, next) => {
        const { token } = req.headers;
        try {
            const { permission } = await db.collection("sessions").findOne({ token });
            if (permission !== "admin") return res.status(401).send("Permission denied!");
        } catch (err) {
            console.log(err);
            return res.status(500).send("Database error.");
        }
        next();
    }
}

