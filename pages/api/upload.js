import { posts } from './data';

let nextId = 100;

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, image, caption } = req.body;

    const newPost = {
      id: nextId++,
      username,
      image,
      caption,
      likes: 0,
      comments: [],
    };

    posts.unshift(newPost); // Add to top
    res.status(200).json({ success: true, post: newPost });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
