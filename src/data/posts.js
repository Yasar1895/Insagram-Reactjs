// mock feed posts; image paths should exist in public/images
export const posts = [
  {
    id: 'p1',
    userId: 'alex',
    image: '/images/post1.jpg',
    caption: 'Sunset at the pier 🌅',
    likes: 124,
    comments: [
      { id: 'c1', user: 'maria', text: 'Amazing shot!' }
    ],
    timestamp: '2h'
  },
  {
    id: 'p2',
    userId: 'maria',
    image: '/images/post2.jpg',
    caption: 'Delicious weekend brunch ☕️🥐',
    likes: 240,
    comments: [
      { id: 'c2', user: 'alex', text: 'Where is this?' }
    ],
    timestamp: '5h'
  },
  {
    id: 'p3',
    userId: 'alex',
    image: '/images/post3.jpg',
    caption: 'Hiking mood 🏔️',
    likes: 56,
    comments: [],
    timestamp: '1d'
  },
  {
    id: 'p4',
    userId: 'maria',
    image: '/images/post4.jpg',
    caption: 'Street art vibes 🎨',
    likes: 78,
    comments: [],
    timestamp: '2d'
  },
  {
    id: 'p5',
    userId: 'alex',
    image: '/images/post5.jpg',
    caption: 'Late night city lights ✨',
    likes: 190,
    comments: [],
    timestamp: '3d'
  }
]
