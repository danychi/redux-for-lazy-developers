import faker from 'faker';
import times from 'lodash/times';

export const generatePosts = () =>
  times(100, () => ({
    id: faker.random.uuid(),
    photoUrl: `https://picsum.photos/640/480/?image=${faker.random.number(1084)}`,
    caption: faker.random.words(),
    createdAt: faker.date.past(),
    location: faker.address.city(),
    likesCount: faker.random.number(),
    comments: times(5, createRandomComment),
    likedByUser: faker.random.boolean(),
    user: { id: faker.random.uuid(), username: faker.internet.userName(), avatarUrl: faker.image.avatar() },
  }));

export const generateOwnPosts = () =>
  times(100, (n) => ({
    id: n,
    photoUrl: `https://picsum.photos/640/480/?image=${faker.random.number(1084)}`,
    caption: faker.random.words(),
    createdAt: faker.date.past(),
    location: faker.address.city(),
    likesCount: faker.random.number(),
    user: { id: faker.random.uuid(), username: faker.internet.userName(), avatarUrl: faker.image.avatar() },
  }));

const createRandomComment = () => ({
  id: faker.random.uuid(),
  body: faker.random.words(),
  createdAt: faker.date.past(),
  userId: faker.random.uuid(),
  username: faker.internet.userName(),
});
