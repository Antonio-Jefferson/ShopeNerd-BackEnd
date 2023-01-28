// import { ObjectId } from "mongodb";
import db from "../database/db.js";

export async function saveProduct(req, res) {
    const { name, description, price, image, category, amount } = req.body;

    try {
        await db.collection("products").insertOne({ name, description, price, image, category, amount });
        res.status(201).send("Created.")
    } catch (err) {
        console.log(err);
        res.status(500).send("Database error.");
    }
}


// export async function deleteProduct(req, res) {
//     const {id} = req.params;

//     try{
//         await db.collection("products").deleteOne({_id: ObjectId(id)});
//         res.status(200).send("Product deleted.");
//     } catch(err){
//         console.log(err);
//         res.status(500).send("Database error.");
//     }
// }

export async function buyProduct(req, res){
    const {id} = req.body;
    try{  
        for(let i = 0; i<id.length;i++){
            await db.collection("products").updateOne({_id:ObjectId(id[i])}, {$inc: {amount: -1}})
        }
        res.sendStatus(204)
    }catch(err){
        res.status(500).send(err);
    }
    

}