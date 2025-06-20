import { users } from '../data';
import allowCors from '../utils/cors';

function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, avatar } = req.body;
    const exists = users.find(u => u.username === username);

    if (exists) {
      res.status(409).json({ message: 'User already exists' });
    } else {
      const newUser = { username, password, avatar: avatar || '' };
      users.push(newUser);
      res.status(201).json({ message: 'User registered', username });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

export default allowCors(handler);
