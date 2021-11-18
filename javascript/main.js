/* 1. Grab the input 
=====================
*/

// code for click button
document.querySelector('button').addEventListener('click', function(){
    var input = document.querySelector('input').value;
    userInputValue(input);
});

// Code for Enter Hit Button
document.querySelector('.userinput').addEventListener('keyup', function(e){
    var input = document.querySelector('input').value;

    // if the key ENTER is pressed...
    if(e.which === 13){
        userInputValue(input);
    }
});

// display show User Input Value
function userInputValue(input){
    userType = input.split(' ').join('+')
    var h2 = document.querySelector('.showUserInputValue');
    h2.innerHTML = input;
    /*2. do the data stuff with the API 
    =================================
    */
    var url = `https://api.giphy.com/v1/gifs/search?q=${userType}&api_key=SDEsWMHoj4DO7LFMxWFHlVJVkElcDm8h`;
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();
    GiphyAJAXCall.addEventListener('load',function(e){
    var data = e.target.response;
    pushToDOM(data);
});
}

/*
3. GIF image show in UI
====================
*/

//show the user input value in UI
function pushToDOM(inputValue) {
    var showImage = document.querySelector('.showImage');
    clear(showImage);
    var response = JSON.parse(inputValue);
    var imageURLs = response.data;
    imageURLs.map(photoURL => 
        showImage.innerHTML += `<img src=${photoURL.images.fixed_height.url}/>`);
}
function clear(item) {
    item.innerHTML = '';
}