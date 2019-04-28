export const SERVER_DOMAIN = 'https://api.tvmaze.com';

// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path) =>
  new Promise((resolve, reject) => {
    fetch(path, {
      method: 'get',
    })
      .then((res) => {
        resolve(res.json());
      })
      .catch((error) => {
        // eslint-disable-next-line
        reject(console.log(error)); // not handling error in this assignment
      });
  });
