const text = document.querySelector('#text');

const jokes = [
    'Why did an old man fall in a well? Because he could not see that well!',


    'Why did the actor fall through the floorboards? They were going through a stage!',
    'Why did a scarecrow win a Nobel prize? He was outstanding in his field!',
    'Why are peppers the best at archery? Because they habanero!',
    'What did the duck say after she bought chapstick? Put it on my bill!'
];

const jokeTeller = () => {
    let res = jokes[Math.floor(Math.random() * jokes.length)];
    text.innerHTML = res;
};

const deleteJoke = () => {
    text.innerHTML = '';
};