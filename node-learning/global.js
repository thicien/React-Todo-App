setTimeout(() => {
    console.log('Timed out');
    clearInterval(interval);
}, 3000);
const interval = setInterval(() => {
    console.log('This is the pure interval')
}, 1000);