import { users } from '../data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
      return res.status(400).json({ message: 'User already exists' });
    }
    users.push({ username, password });
    res.status(200).json({ message: 'User registered' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}