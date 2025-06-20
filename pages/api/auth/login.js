import { users } from '../data';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ token: 'dummy-token', username });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}