// write a program that finds the factors a given number
// Example: 12
// Factors: 1, 2, 3, 4, 6, 12

const num = 25;

// loop through num variable
for (let i = 1; i <= num; i++) {

    // check if each iteration of i is a factor of num. This will divide num by i and check for a 0 remainder. If true, return value of i.
    if (num % i == 0) {
        console.log(i);
    }
}