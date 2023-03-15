let count = 3;

const countDown = () => {
  if (count >= 1) {
    console.log(count);
    count--;
  } else if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
};
const intervalID = setInterval(countDown, 1000);
