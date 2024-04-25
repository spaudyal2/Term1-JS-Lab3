                                                                 // Lab4- Subit Paudyal

/*Challenge 1*/


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
function randomNumber(min, max){
    let result = Math.floor(Math.random() *(max - min  + 1 ) + min)
    return result;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function challenge1(min,max) {
    let random = [];
    let elements = 5;
    while (random.length < elements) {
        let r = randomNumber(min,max)
        if(random.indexOf(r) == -1){
            random.push(r);
        }
    }
    return random.sort((a,b) => a-b);
}

  //let answer = challenge1(10, 20);
  //console.log(answer)


/* Challange 2*/ //based on above function

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
function generateArrays(min, max, times, search){
    let count = [];
    let answer2 = Array.from({length: times}, () => challenge1(min, max));
    
    answer2.forEach((arr)=>{
                let idx = arr.indexOf(search)
                if (idx > -1){
                count.push(idx)
                }
    })

    console.log(`Using ${min} for the low and ${max} for the high range.`);
    answer2.forEach((arr) => {
        console.log(arr);
    })

    console.log(`When the number ${search} was searched ${times} times, it was found ${count.length} times`);
}
generateArrays(10, 20, 10, 15) // (enter value in following order: low-number, high-number, times, search)
