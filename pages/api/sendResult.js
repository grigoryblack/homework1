import { MongoClient } from "mongodb";


export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = JSON.parse(req.body);
        const uri = 'mongodb://localhost:27017';
        const client = new MongoClient(uri);
        const db = client.db('testsdb');
        const collection = db.collection('results');
        const result = await collection.insertOne(data);
        console.log(result);
        await client.close();
        res.status(201).json({ message: "Data inserted successfully!" });
    }
}