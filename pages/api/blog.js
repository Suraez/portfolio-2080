import clientPromise from '../../util/mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;
      const db = client.db("blog");
      const blogs = await db.collection('blogs').find({}).toArray();
      res.status(200).json({ blogs });
    } catch (error) {
      console.error('MongoDB connection error', error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
