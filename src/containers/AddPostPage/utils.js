import uuid from 'uuid/v4';

export const buildPost = (photoUrl, caption, location, user) => ({
  id: uuid(),
  photoUrl,
  caption,
  createdAt: new Date().toISOString(),
  location,
  likesCount: 0,
  user: {
    id: user.id,
    username: user.username,
    avatarUrl: user.avatarUrl,
  },
});
