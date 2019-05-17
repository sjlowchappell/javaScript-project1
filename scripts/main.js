$(function() {
    console.log('ready');

    // Declaring variables that will be used later
    let hikeValue = 0;
    let q1Selected;
    let q2Selected;
    let q3Selected;
    let q4Selected;
    let q5Selected;
    const hikeOptions = [];

    // Creating objects for each of the potential hike results
    // Includes an image, title of the hike, and a brief description
    // to be rendered on page
    const appalachianTrail = {
        image: './assets/rsz_12atphoto.jpg',
        title: 'The Appalachian Trail',
        description: 'The Appalachian National Scenic Trail, generally known as the Appalachian Trail or simply the AT, is a marked hiking trail in the eastern United States extending between Springer Mountain in Georgia and Mount Katahdin in Maine.'
    };
    const pacificCrestTrail = {
        image: './assets/rsz_1pctphoto.jpg',
        title: 'The Pacific Crest Trail',
        description: 'The Pacific Crest Trail, officially designated as the Pacific Crest National Scenic Trail (PCT) is a long-distance hiking and equestrian trail closely aligned with the highest portion of the Sierra Nevada and Cascade mountain ranges, which lie 100 to 150 miles (160 to 240 km) east of the U.S. Pacific coast.'
    };
    const continentalDivideTrail = {
        image: './assets/rsz_cdtphoto.jpg',
        title: 'The Continental Divide Trail',
        description: 'The Continental Divide National Scenic Trail (in short Continental Divide Trail (CDT)) is a United States National Scenic Trail running 3,100 miles (5,000 km) between Mexico and Canada.'
    };
    const teAroraTrail = {
        image: './assets/rsz_tearoraphoto.jpg',
        title: 'The Te Arora Trail',
        description: 'Te Araroa (The Long Pathway) is New Zealand\'s long distance tramping route, stretching circa 3,000 kilometres (1,900 mi) along the length of the country\'s two main islands from Cape Reinga to Bluff.'

    };
    const hokkaidoNatureTrail = {
        image: './assets/rsz_hokkaidophoto.jpg',
        title: 'The Hokkaido Nature Trail',
        description: 'Hokkaido is blessed with balmy summers that are ideal for walking, and the trail touches on a dazzling variety of landscapes, from glaciers, forests and volcanoes to lakes, coastline and pastoral lowlands.'

    };
    const elCaminoTrail = {
        image: './assets/rsz_spainphoto.jpg',
        title: 'The El Camino Trail',
        description: 'Spilling over the Pyrenees from France into Spain, the network of trails that make up the Route of St. James—or El Camino de Santiago—converges at the cathedral of Santiago de Compostela.'

    };


    // Smooth scroll effect to bring the user from the header down to the quiz
    // Got this from this article: https://www.abeautifulsite.net/smoothly-scroll-to-an-element-without-a-jquery-plugin-2
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    
    });

    // Helper function to toggle answer selection. 
    // Takes an element as an argument and removes the unSelected class, and adds the unSelected class to its siblings
    const selectionHelper = (element) => {
        $(element).removeClass('unSelected');
        $(element).parent().children().not(element).addClass('unSelected');
    };

    // Helper function to calculate the hike value.
    // Depending on which answer is selected, hike value increases
    // Hike value will be used to determine the index to select
    // a hike from the array of potential hikes
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


    // I feel like I could definitely clean this up because every one of these
    // click event listeners is identical, but I'm out of time! 
    // Just a ton of event listeners that listen for clicks on different
    // answers. 
    // When an item is clicked, the q1Selected value is updated (used later to help determine the results of the quiz)
    //Also, sends the selected item through the selectionHelper function to select/deselect items in each question container

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



    // When the user clicks the submit button, this function will add together all of the selected values and return the appropriate hike based on the added values.
    // With more time, I would like to add some error handling to make sure a user selects at least one option for each question
    $('form').on('submit', function(e) {
        e.preventDefault();

        // If an answer already exists on the page, remove it so it can be replaced with a new final answer
        if ($('.quiz figure').last().hasClass('finalAnswer')) {
            $('.quiz figure').last().remove();
        }

        let perfectHike;

        // Populates the hikeOptions array depending on whether or not the user is staying in North America, Going international, or going anywhere 
        if ($(q1Selected).hasClass('answerOne')) {
            hikeOptions.push(appalachianTrail, pacificCrestTrail, continentalDivideTrail);
        } else if ($(q1Selected).hasClass('answerTwo')) {
            hikeOptions.push(elCaminoTrail, teAroraTrail, hokkaidoNatureTrail);
        } else if ($(q1Selected).hasClass('answerThree')) {
            hikeOptions.push(elCaminoTrail, appalachianTrail, pacificCrestTrail, teAroraTrail, hokkaidoNatureTrail, continentalDivideTrail);
        }


        // help function adjusts the hikeValue
        addingHelper(q2Selected);
        addingHelper(q3Selected);
        addingHelper(q4Selected);
        addingHelper(q5Selected);


        // helper function that will update the perfect hike value based on 
        // take a hike object and put together a final result in html that will
        // be added to the DOM
        const perfectHikeHelper = (value, options) => {
            perfectHike = 
            `<figure class="finalAnswer">
                <img src="${options[value].image}" alt="" class="answerItem">
                <div class="answerItem">
                    <h2>${options[value].title}</h2>
                    <p>${options[value].description}</p>
                </div>     
            </figure>`;
        }

        // If there are 3 or fewer hike options in the hikeOptions array (North America or International only), sends through the array with only 3 potential indices
        // Otherwise, there will be 6 options (north america and international combined) in the hikeOptions array, sends through the array with 6 potential indices
        // All based on the total hikeValue calculated from the user's selections 

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

        // appends the perfectHike to the quiz

        $('.quiz').append(perfectHike);

        // clears the hike value and hike options array so the user can take the quiz again without refreshing the page
        hikeValue = 0;
        hikeOptions.length = 0;
    });

});