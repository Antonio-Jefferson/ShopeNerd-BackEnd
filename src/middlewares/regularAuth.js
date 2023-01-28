import db from "../database/db.js"

export default function regularAuth() {
    return async (req, res, next) => {
        const {authorization} = req.headers
        const token = authorization?.replace("Bearer ", "")
        if(!token) return res.status(422).send("informe o token!")
        try {
            const userInfo = await db.collection('sessoes').findOne({ token })
            if (!userInfo) return res.status(401).send("Acesso não autorizado!")
            next()
        } catch (err) {
            console.log(err);
            return res.status(500).send("Database error.");
        }
        next();
    }
}
