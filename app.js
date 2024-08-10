// TODAY JAVASCRIPT TASK // 

let userAnagram = ["bat", "tap", "cat", "tab", "pat", "care", "race", "raza", "azar", "pet"];

function todayTask(words) {
    var emptyAnagram = {};
    for (var word of words) {
        let anaWords = word.split('').sort();
        if (!emptyAnagram[anaWords]) {
            emptyAnagram[anaWords] = [word];
        } else {
            emptyAnagram[anaWords].push(word);
        }
    }
    return Object.values(emptyAnagram);
}
console.log(todayTask(userAnagram));





