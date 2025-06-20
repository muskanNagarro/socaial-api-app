import { posts, users } from '../data';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const enrichedPosts = posts.map(post => {
      const user = users.find(u => u.username === post.username);
      return {
        ...post,
        avatar: user?.avatar || null,
      };
    });

    res.status(200).json({ posts: enrichedPosts });
  } else if (req.method === 'POST') {
    const { username, image, caption } = req.body;
    const user = users.find(u => u.username === username);
    const newPost = {
      id: Date.now(),
      username,
      avatar: user?.avatar || null,
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
