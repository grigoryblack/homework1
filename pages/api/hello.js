const { MongoClient } = require('mongodb');

export default async function handler(req, res) {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);
  const db = client.db('testsdb');
  const collection = db.collection('tests');
  const test = await collection.findOne({ title: "Тест номер один"});
  res.json(test);
}
