import faker from 'faker';
import times from 'lodash/times';

export const generatePosts = () =>
  times(100, (n) => ({
    id: n,
    photoUrl: `https://picsum.photos/640/480/?image=${faker.random.number(1084)}`,
    caption: faker.random.words(),
    createdAt: faker.date.past(),
    location: faker.address.city(),
    likesCount: faker.random.number(),
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
