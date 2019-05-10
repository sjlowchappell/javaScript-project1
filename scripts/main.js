$(function() {
    console.log('ready');


    $('.questionOne:nth-child(1)').on('click', () => {
        console.log("I clicked answer one!");
    });

    $('.questionOne:nth-child(2)').on('click', () => {
        console.log("I clicked answer 2!");

    });

    $('.questionOne:nth-child(3)').on('click', () => {
        console.log("I clicked answer 3!");

    });
});