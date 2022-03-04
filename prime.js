showPrimes(20);
function showPrimes(limit){
    for (let number = 2; number <= limit; i++){
        let isPrime = true;
        for (let factor = 2; factor < number; factor++){
        if (number % factor ===){
        isPrime = false;
        break;
        }
    }
    }
    if (isPrime) console.log(number)
}