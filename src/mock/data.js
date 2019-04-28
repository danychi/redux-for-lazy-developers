import faker from 'faker';
import times from 'lodash/times';

export const generatePosts = () =>
  times(100, (n) => ({
    id: n,
    photoUrl: faker.image.image(),
    caption: faker.random.words(),
    createdAt: faker.date.past(),
    location: faker.address.city(),
    likesCount: faker.random.number(),
    user: { id: faker.random.uuid(), username: faker.internet.userName(), avatarUrl: faker.image.avatar() },
  }));
