export default {
  getMessage() {
    return new Promise((resolve, reject) => {
      const randomInteger = Math.floor(Math.random() * (10 - 1)) + 1;
      console.log('randomInteger', randomInteger);
      window.setTimeout(() => {
        if (randomInteger % 2 === 0) {
          resolve({ success: true });
        } else {
          reject({ errror: 'Oops! Something went wrong! ' });
        }
      }, 1000);
    });
  }
};
