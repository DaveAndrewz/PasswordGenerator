// ! PASSWORD GENERATOR ! \\

// ? Character Generator Functions ? \\

// Function that accepts a string value as an argument and returns a random index number from the string argument
function randomIndex(str){
    return Math.floor(Math.random() * str.length);
}

// Function that returns a random letter using a random lowercase letter
function getRandomLower (){
    const letters = `abcdefghijklmnopqrstuvwxyz`;
    // Returning a random letter using a random index in the `letters` string
    return letters[randomIndex(letters)];
}

// Function that returns a random UpperCase letter
function getRandomUpper (){
    // Running the `getRandomLower` function to create a random letter and setting that value to the `letter` variable
    const letter = `getRandomLower`;
    // Changing the random letter to an uppercase letter and returning it from the function
    return letter.toUpperCase();
}

// Function that returns a random number (AKA Random number as a string value) 
function getRandomNumber (){
    const numbers = `0123456789`;
    // Returning a random number using a random index in the `numbers` string
    return numbers[randomIndex(numbers)];
}

function getRandomSymbol (){
    const symbols = `!@#$%^&*()_+{}|:"<>?-=[];',./£`;
    // Returning a random number using a random index in the `numbers` string
    return symbols[randomIndex(symbols)];
}