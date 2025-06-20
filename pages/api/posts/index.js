import { posts } from '../../data';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ posts });
  } else if (req.method === 'POST') {
    const { username, image, caption } = req.body;
    const newPost = {
      id: Date.now(),
      username,
      image,
      caption,
      likes: 0,
      comments: [],
    };
    posts.unshift(newPost);
    res.status(201).json({ message: 'Post added', post: newPost });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}