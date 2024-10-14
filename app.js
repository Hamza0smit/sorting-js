var numbers = [10,7,9,1,2,4,8];
console.log(numbers);

for (var i = 1;i <= numbers.length; i++){
    for (var j =0; j < numbers.length-1; j++) {
        if ( numbers[j] > numbers[j+1]){
            numbers.splice(j,0,numbers[j+1],numbers[j])
            numbers.splice(j+2,2); 
        }
    }
}

document.write(numbers)
console.log(numbers);