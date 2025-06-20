import { posts } from '../../data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { postId, user, text } = req.body;
    const post = posts.find(p => p.id === postId);
    if (post) {
      post.comments.push({ user, text });
      res.status(200).json({ message: 'Comment added', comments: post.comments });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}