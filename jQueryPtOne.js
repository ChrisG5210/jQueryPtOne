//1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$ (function (){
    console.log('Lets get ready to party with jQuery')
});

// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('img', 'article').addClass('image-center');

// 3. Remove the last paragraph in the article.
$('p').eq(5).remove()

// 4. Set the font size of the title to be a random pixel size from 0 to 100.
$('h1').css('font-size', Math.random() * 100)

// 5. Add an item to the list; it can say whatever you want.
$('ol').append('<li> This jQuery stuff is kinda cool </li>')

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty()
.append('<p> Sorry for making you read this terrible list..its gone now </p>');

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('input').on('focus', function () {
    let red = $('.form-control').val().eq(0)
    let blue = $('.form-control').val().eq(1)
    let green = $('.form-control').val().eq(2)
    $('body').css('background-color', rgb('red' + 'blue' + 'green'))
})

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').on('click', function (event) {
    remove(event.target)
})

////////////////////////PART TWO - MOVIE APP/////////////////////////////