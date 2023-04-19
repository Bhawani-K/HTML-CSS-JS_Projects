/*
    conditional Statements
        - If-else
        - switch
*/

// 1. If-else
if (voterAge >= 18) {
    console.log('voter can vote for govt.');
} else {
    console.log('voter cannot vote for govt.');
}

// 2. switch
switch (new Date().getDate) {
    case 0:
        text = 'Today is Sunday'
        break;
    case 6:
        text = 'Today is Saturday'
        break;
    default:
        text = 'will wait for weekend'
        break;
}