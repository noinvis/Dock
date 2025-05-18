{
    // 1 - code (Vowel Count)
    // Sharti: Return the number (count) of vowels in the given string. We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
    
    function getCount(str) {
        const vowels = 'aeiou';
        let count = 0;
        for (let i of str) {
            if (vowels.includes(i)) {
            count++;
            }
        }
        return count;
    }
}

{
    // 2 - code (Disemvowel Trolls)
    // Sharti: Your task is to write a function that takes a string and return a new string with all vowels removed.

    function disemvowel(str) {
        const vowels = "aeiouAEIOU";
        let result = "";
        for (let i of str) {
            if (!vowels.includes(i)) {
            result += i;
            }
        }
        return result;
    }
}

{
    // 3 - code (Descending Order)
    // Sharti: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

    function descendingOrder(n){
        return +n.toString().split('').sort((a, b) => b - a).join('')
    }
}

{
    // 4 - code (You're a square!)
    // Sharti: Given an integral number, determine if it's a square number: In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

    function isSquare(n){
        return Number.isInteger(Math.sqrt(n));
    }
}

{
    // 5 - code (Shortest Word)
    // Sharti: Simple, given a string of words, return the length of the shortest word(s). String will never be empty and you do not need to account for different data types.

    function findShort(s){
        return s.split(" ").map(word => word.length).reduce((min, len) => Math.min(min, len));
    }
}

{
    // 6 - code (Exes and Ohs)
    // Sharti: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    function XO(str) {
        str = str.toLowerCase();
        let x = 0;
        let o = 0;
        for (let i of str) {
            if (i === 'x') x++;
            if (i === 'o') o++;
        }
        return x === o;
    }
}

{
    // 7 - code (Sum of Numbers)
    // Sharti: Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

    function getSum(a, b){
        if (a === b) return a;
        let min = Math.min(a, b);
        let max = Math.max(a, b);
        let sum = 0;
        for (let i = min; i <= max; i++) {
            sum += i;
        }
        return sum;
    }
}

{
    // 8 - code (Credit Card Mask)
    // Sharti: Your task is to write a function maskify, which changes all but the last four characters into '#'.

    function maskify(cc) {
        if (cc.length <= 4) return cc;
        const invisible = '#'.repeat(cc.length - 4);
        const visible = cc.slice(-4);
        return invisible + visible;
    }
}

{
    // 9 - code (Find the unique number)
    // Sharti: There is an array with some numbers. All numbers are equal except for one. Try to find it!

    function findUniq(arr) {
        arr.sort((a, b) => a - b);
        return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
    }
}

{
    // 10 - code (Human Readable Time)
    // Sharti: Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    function humanReadable (seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        const res = num => String(num).padStart(2, '0');
        return `${res(hours)}:${res(minutes)}:${res(secs)}`;
    }
}

{
    // 11 - code (Cockroach)
    // Sharti: The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

    function cockroachSpeed(s) {
        return Math.floor(s * 100000 / 3600);
    }
}

{
    // 12 - code (Small enough?)
    // Sharti: You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

    function smallEnough(a, limit){
        for (let i = 0; i < a.length; i++) {
            if (a[i] > limit) {
            return false;
            }
        }
        return true;
    }
}

{
    // 13 - code (For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre)
    // Sharti: It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

    function quote(fighter) {
        if (fighter.toLowerCase() === "george saint pierre") return "I am not impressed by your performance."
        else if (fighter.toLowerCase() === "conor mcgregor") return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    }
}

{
    // 14 - code (Keep Hydrated!)
    // Sharti: You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.
    
    function litres(time) {
        return Math.floor(time * 0.5);
    }
}

{
    // 15 - code (Calculate average)
    // Sharti: Write a function which calculates the average of the numbers in a given array.

    function findAverage(array) {
        if (array.length === 0) return 0;
        let avg = array.reduce((sum, val) => sum + val, 0);
        return avg / array.length;
    }
}

{
    // 16 - code (DNA to RNA Conversion)
    // Sharti: Create a function which translates a given DNA string into RNA.

    function DNAtoRNA(dna) {
        return dna.replace(/T/g, 'U');
    }
}

{
    // 17 - code (Grasshopper - Grade book)
    // Sharti: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

    function getGrade (s1, s2, s3) {
        let avg = (s1 + s2 + s3) / 3;
        if (avg >= 90) return 'A';
        if (avg >= 80) return 'B';
        if (avg >= 70) return 'C';
        if (avg >= 60) return 'D';
        return 'F';
    }
}

{
    // 18 - code (Grasshopper - Personalized Message)
    // Sharti: Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

    function greet (name, owner) {
        return name === owner ? "Hello boss" : "Hello guest"
    }
}

{
    // 19 - code (Volume of a Cuboid)
    // Sharti: Bob needs a fast way to calculate the volume of a rectangular cuboid with three values: the length, width and height of the cuboid.

    class Kata {
        static getVolumeOfCuboid(length, width, height) {
            return length * width * height
        }
    }
}

{
    // 20 - code (Area or Perimeter)
    // Sharti: You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.

    const areaOrPerimeter = function(l , w) {
        return l === w ? l * w : l * 2 + w * 2
    }
}

{
    // 21 - code (Third Angle of a Triangle)
    // Sharti: You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd.

    function otherAngle(a, b) {
        return 180 - (a + b)
    }
}

{
    // 22 - code (L1: Set Alarm)
    // Sharti: The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

    function setAlarm(employed, vacation){
        return employed && !vacation
    }
}

{
    // 23 - code (Parse nice int from char problem)
    // Sharti: Write a program that returns the girl's age (0-9) as an integer. Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

    function getAge(inputString){
        return +inputString[0]
    }
}

{
    // 24 - code (The Feast of Many Beasts)
    // Sharti: Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

    function feast(beast, dish) {
        return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
    }
}

{
    // 25 - code (Grasshopper - Check for factor)
    // Sharti: Return true if it is a factor or false if it is not.

    function checkForFactor (base, factor) {
        return base % factor === 0;
    }
}

{
    // 26 - code (Keep up the hoop)
    // Sharti: Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

    function hoopCount (n) {
        return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"  
    }
}

{
    // 27 - code (Get the mean of an array)
    // Sharti: Return the average of the given array rounded down to its nearest integer.

    function getAverage(marks){
        let sum = marks.reduce((acc, val) => acc + val, 0);
        return Math.floor(sum / marks.length);
    }
}

{
    // 28 - code (Switch it Up!)
    // Sharti: When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

    function switchItUp(number){
        const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        return words[number];
    }
}

{
    // 29 - code (Function 2 - squaring an argument)
    // Sharti: Now you have to write a function that takes an argument and returns the square of it.

    function square(number){
        return number ** 2
    }
}

{
    // 30 - code (Twice as old)
    // Sharti: Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

    function twiceAsOld(dadYearsOld, sonYearsOld) {
        return Math.abs(dadYearsOld - 2 * sonYearsOld);
    }
}

{
    // 31 - code (All Star Code Challenge #18)
    // Sharti: Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.

    function strCount(str, letter){  
        let count = 0;
        for (let i of str) {
            if (i === letter) count++;
        }
        return count;
    }
}

{
    // 32 - code (Is it even?)
    // Sharti: The function needs to return either a true or false.

    function testEven(n) {
        return n % 2 === 0
    }
}

{
    // 33 - code (Grasshopper - Terminal game move function)
    // Sharti: Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

    function move (position, roll) {
        return position + roll * 2;
    }
}

{
    // 34 - code (Get Planet Name By ID)
    // Sharti: The function is not returning the correct values. Can you figure out why?

    function getPlanetName(id) {
        var name;
        switch(id) {
            case 1:
            name = 'Mercury';
            break;
            case 2:
            name = 'Venus';
            break;
            case 3:
            name = 'Earth';
            break;
            case 4:
            name = 'Mars';
            break;
            case 5:
            name = 'Jupiter';
            break;
            case 6:
            name = 'Saturn';
            break;
            case 7:
            name = 'Uranus';
            break;
            case 8:
            name = 'Neptune';
            break;
        }
        return name;
    }
}

{
    // 35 - code (Sum of Digits / Digital Root)
    // Sharti: Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

    function digitalRoot(n) {
        while (n >= 10) {
            n = n.toString().split('').reduce((sum, digit) => sum + +digit, 0);
        }
        return n;
    }
}