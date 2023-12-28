import { MongoClient } from "mongodb";


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { postData } = req.body;
    console.log(postData)
 
    try {
       
       const uri = 'mongodb+srv://rakesh:185d1a0151@project.phg7vjo.mongodb.net/Project?retryWrites=true&w=majority';
      var client = new MongoClient(uri);
      await client.connect();
      const result = await client.db('TestData').collection('test').insertOne( postData );
      res.status(200).json({ success: true, data: result });
      console.log("Data Inserted")
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server Error' });
    } finally {
      
    }
  } else {
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}