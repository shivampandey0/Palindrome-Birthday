const date = document.querySelector(".date-of-birth")
const submit = document.querySelector(".check")
const process = document.querySelector(".timeout")
const result = document.querySelector(".result")

submit.addEventListener("click", checkPalindrome)


function checkPalindrome() {
    let bday = date.value;

    if (date.value) {
        showProcess();

        setTimeout(() => {
            hideProcess();
        }, 1000);

        let dateArr = bday.split("-");
        let dateObj = {
            day: Number(dateArr[2]),
            month: Number(dateArr[1]),
            year: Number(dateArr[0]),
        }

        let dateAsStr = getDateAsString(dateObj);
        let list = checkPalindromeForAllDateFormats(dateAsStr);
        console.log(list);
        let isPalindrome = false;

        list.forEach(item => {
            if (item) {
                isPalindrome = true;
                return;
            }
        });

        if (isPalindrome) { 
            result.innerText = "Congrats! Your birthday is palindrome.";
        }else{
            result.innerText ="Nope! Your birthday is not a palindrome."
        }      


    } else {

        result.innerText = "Invalid Date";
        
    }
    
}

function showProcess() {
    process.style.display = "block";
    result.style.display = "none";

}

function hideProcess() {
    process.style.display = "none";
    result.style.display = "block";
    
}

function getDateAsString(date) {
    let dateAsStr = { day:"", month:"", year: date.year.toString()};

    if (date.day <10) {
        dateAsStr.day = "0" + date.day;
    }else{
        dateAsStr.day = date.day.toString();
    }

    if (date.month < 10) {
        dateAsStr.month = "0" + date.month; 
    } else {
        dateAsStr.month = date.month.toString()
    }
    return dateAsStr;
}

function checkPalindromeForAllDateFormats(date) {   
    var dateInAllFormats = getDateInAllFormats(date);
    var palindromeList = [];

    dateInAllFormats.forEach(item => {
        var ans =  isStringPalindrome(item);
        palindromeList.push(ans);
    });

    return palindromeList;
    
}

function getDateInAllFormats(date) {
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}


function isStringPalindrome(item) {
    var reversedItem = item.split("").reverse().join("");
    return item === reversedItem;
}