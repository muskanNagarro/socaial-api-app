export const users = [
  { username: 'john', password: '123', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { username: 'alice', password: '123', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { username: 'bob', password: '123', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { username: 'claire', password: '123', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { username: 'dave', password: '123', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' }
];

const icons = ['🌅', '☕', '🏞️', '🌼', '🌃', '🍝', '🐶', '🏛️', '📖', '🌮', '🎨', '🚴‍♂️', '🏖️', '📷', '📱', '🎉', '🧁', '🍕', '🎶', '📍'];

export const posts = [
  ...Array.from({ length: 20 }, (_, i) => {
    const usernames = ['john', 'alice', 'bob', 'claire', 'dave'];
    const username = usernames[i % usernames.length];
    const avatar = users.find(u => u.username === username)?.avatar || '';
    const icon = icons[i % icons.length];
    return {
      id: i + 1,
      username,
      avatar, // ✅ add this line to include avatar in post
      image: `https://picsum.photos/seed/post${i + 1}/800/600`,
      caption: `${icon} Sample post #${i + 1} — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac eros.`.slice(0, 100),
      likes: Math.floor(Math.random() * 30) + 1,
      comments: [
        {
          user: usernames[(i + 1) % usernames.length],
          text: 'Nice one! 👌',
          avatar: users.find(u => u.username === usernames[(i + 1) % usernames.length])?.avatar || ''
        }
      ]
    }
  })
];