$(function() {
    console.log('ready');

    let hikeValue = 0;
    let q1Selected;
    let q2Selected;
    let q3Selected;
    let q4Selected;
    let q5Selected;

    const hikeOptions = [];
    const appalachianTrail = {
        image: 'https://picsum.photos/400',
        title: 'The Appalachian Trail',
        description: 'The AT is great'

    };
    const pacificCrestTrail = {
        image: 'https://picsum.photos/400',
        title: 'The Pacific Crest Trail',
        description: 'The PCT is great'

    };
    const continentalDivideTrail = {
        image: 'https://picsum.photos/400',
        title: 'The Continental Divide Trail',
        description: 'The CDT is great'

    };
    const teAroraTrail = {
        image: 'https://picsum.photos/400',
        title: 'The Te Arora Trail',
        description: 'The Te Arora Trail is great'

    };
    const hokkaidoNatureTrail = {
        image: 'https://picsum.photos/400',
        title: 'The Hokkaido Nature Trail',
        description: 'The HKD is great'

    };
    const elCaminoTrail = {
        image: 'https://picsum.photos/400',
        title: 'The El Camino Trail',
        description: 'The El Camino Trail is great'

    };


    // Helper function to toggle answer selection. It takes an element as an argument and removes the unSelected class, and adds the unSelected class to its siblings
    const selectionHelper = (element) => {
        $(element).removeClass('unSelected');
        $(element).parent().children().not(element).addClass('unSelected');
    };

    // If answer one selected, hike Value + 1
    // If answer two selected, hike value + 2
    // If answer three selected, hike value + 3
    const addingHelper = (selection) => {
        if ($(selection).hasClass('answerOne')) {
            hikeValue = hikeValue + 1;
        } else if ($(selection).hasClass('answerTwo')) {
            hikeValue = hikeValue + 2;
        } else if ($(selection).hasClass('answerThree')) {
            hikeValue = hikeValue + 3;
        } 
    };

    // QUESTION 1 

    $('.questionOne').on('click', '.answerOne', function() {
        selectionHelper(this);
        q1Selected = this;
    });

    $(".questionOne").on('click', '.answerTwo', function() {
        selectionHelper(this);
        q1Selected = this;
    });

    $(".questionOne").on('click', '.answerThree', function() {
        selectionHelper(this);
        q1Selected = this;
    });

    // QUESTION 2

    $('.questionTwo').on('click', '.answerOne', function() {
        selectionHelper(this);
        q2Selected = this;
    });

    $(".questionTwo").on('click', '.answerTwo', function() {
        selectionHelper(this);
        q2Selected = this;
    });

    $(".questionTwo").on('click', '.answerThree', function() {
        selectionHelper(this);
        q2Selected = this;
    });

    // QUESTION 3 

    $('.questionThree').on('click', '.answerOne', function() {
        selectionHelper(this);
        q3Selected = this;
    });

    $(".questionThree").on('click', '.answerTwo', function() {
        selectionHelper(this);
        q3Selected = this;
    });

    $(".questionThree").on('click', '.answerThree', function() {
        selectionHelper(this);
        q3Selected = this;
    });

    // QUESTION 4 

    $('.questionFour').on('click', '.answerOne', function() {
        selectionHelper(this);
        q4Selected = this;
    });

    $(".questionFour").on('click', '.answerTwo', function() {
        selectionHelper(this);
        q4Selected = this;
    });

    $(".questionFour").on('click', '.answerThree', function() {
        selectionHelper(this);
        q4Selected = this;
    });

    // QUESTION 5 

    $('.questionFive').on('click', '.answerOne', function() {
        selectionHelper(this);
        q5Selected = this;
    });

    $(".questionFive").on('click', '.answerTwo', function() {
        selectionHelper(this);
        q5Selected = this;
    });

    $(".questionFive").on('click', '.answerThree', function() {
        selectionHelper(this);
        q5Selected = this;
    });



    // When the user clicks the submit button, this function will add together all of the selected values and return the appropriate hike based on the added values
    $('.hikeSubmit').on('click', function() {
        if ($('.quiz figure').last().hasClass('finalAnswer')) {
            $('.quiz figure').last().remove();
        }

        let perfectHike;

        if ($(q1Selected).hasClass('answerOne')) {
            hikeOptions.push(appalachianTrail, pacificCrestTrail, continentalDivideTrail);
        } else if ($(q1Selected).hasClass('answerTwo')) {
            hikeOptions.push(elCaminoTrail, teAroraTrail, hokkaidoNatureTrail);
        } else if ($(q1Selected).hasClass('answerThree')) {
            hikeOptions.push(elCaminoTrail, appalachianTrail, pacificCrestTrail, teAroraTrail, hokkaidoNatureTrail, continentalDivideTrail);
        }

        addingHelper(q2Selected);
        addingHelper(q3Selected);
        addingHelper(q4Selected);
        addingHelper(q5Selected);

        const perfectHikeHelper = (value, options) => {
            console.log(`Hike value is ${value}`);
            console.log(`Your hike is ${options[value].title}`);
            console.log(options);
            perfectHike = 
            `<figure class="finalAnswer">
                <img src="${options[value].image}" alt="">
                <div>
                    <h2>${options[value].title}</h2>
                    <figcaption>${options[value].description}</figcaption>
                </div>     
            </figure>`;
        }

        if (hikeOptions.length<=3) {
            if (hikeValue < 6) {
                perfectHikeHelper(0, hikeOptions);          
            } else if (hikeValue < 10) {
                perfectHikeHelper(1, hikeOptions);
            } else {
                perfectHikeHelper(2, hikeOptions);
            }
        } else {
            if (hikeValue < 5) {
                perfectHikeHelper(0, hikeOptions);
            } else if (hikeValue < 7) {
                perfectHikeHelper(1, hikeOptions);
            } else if (hikeValue < 9) {
                perfectHikeHelper(2, hikeOptions);
            } else if (hikeValue < 10) {
                perfectHikeHelper(3, hikeOptions);
            } else if (hikeValue < 11) {
                perfectHikeHelper(4, hikeOptions);
            } else {
                perfectHikeHelper(5, hikeOptions);
            }   
        }

        $('.quiz').append(perfectHike);

        hikeValue = 0;
        hikeOptions.length = 0;
    });

});