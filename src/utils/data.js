import faker from 'faker';

export const createComment = (body, userId, username) => ({
  id: faker.random.uuid(),
  body,
  createdAt: new Date().toISOString(),
  userId,
  username,
});
