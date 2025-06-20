import { posts } from '../data';
import allowCors from '../utils/cors';

function handler(req, res) {
  if (req.method === 'POST') {
    const { postId } = req.body;
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.likes += 1;
      res.status(200).json({ message: 'Liked', likes: post.likes });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default allowCors(handler);
