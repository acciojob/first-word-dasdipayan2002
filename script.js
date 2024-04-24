function firstWord(str) {
  // your code here
	let words = str.trim().split(' ');
    return words[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
