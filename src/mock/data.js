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
  times(100, () => ({
    id: faker.random.uuid(),
    photoUrl: `https://picsum.photos/640/480/?image=${faker.random.number(1084)}`,
    caption: faker.random.words(),
    createdAt: faker.date.past(),
    location: faker.address.city(),
    likesCount: faker.random.number(),
    comments: times(5, createRandomComment),
    likedByUser: faker.random.boolean(),
    user: {
      id: '88aa9085-b3ed-4351-ad25-86710a4f6a41',
      username: 'danychi',
      avatarUrl:
        'https://scontent-ams3-1.cdninstagram.com/vp/ce49f48904eb9ca0cb78eb9b12724a75/5D702D0D/t51.2885-19/s320x320/46819842_333684380565961_9093640698548191232_n.jpg?_nc_ht=scontent-ams3-1.cdninstagram.com',
    },
  }));

const createRandomComment = () => ({
  id: faker.random.uuid(),
  body: faker.random.words(),
  createdAt: faker.date.past(),
  userId: faker.random.uuid(),
  username: faker.internet.userName(),
});
