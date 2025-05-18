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