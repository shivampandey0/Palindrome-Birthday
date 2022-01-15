const date = document.querySelector(".date-of-birth")
const submit = document.querySelector(".check")
const process = document.querySelector(".timeout")
const result = document.querySelector(".result")

const checkPalindrome =() => {
    const bday = date.value;

    if (date.value) {
        showProcess();
        setTimeout(() => {
            hideProcess();
        }, 1000);

        const dateArr = bday.split("-");
        const dateObj = {
            day: Number(dateArr[2]),
            month: Number(dateArr[1]),
            year: Number(dateArr[0]),
        }

        const dateAsStr = getDateAsString(dateObj);
        const list = checkPalindromeForAllDateFormats(dateAsStr);
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

const showProcess = () => {
    process.style.display = "block";
    result.style.display = "none";
}

const hideProcess =()=> {
    process.style.display = "none";
    result.style.display = "block";
    
}

const getDateAsString = date => {
    const dateAsStr = { day:"", month:"", year: date.year.toString()};

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

const checkPalindromeForAllDateFormats = date => {   
    const dateInAllFormats = getDateInAllFormats(date);
    const palindromeList = [];

    dateInAllFormats.forEach(item => {
        const ans =  isStringPalindrome(item);
        palindromeList.push(ans);
    });

    return palindromeList;
    
}

const getDateInAllFormats = date=> {
    const ddmmyyyy = date.day + date.month + date.year;
    const mmddyyyy = date.month + date.day + date.year;
    const yyyymmdd = date.year + date.month + date.day;
    const ddmmyy = date.day + date.month + date.year.slice(-2);
    const mmddyy = date.month + date.day + date.year.slice(-2);
    const yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
}


const isStringPalindrome = item => {
    var reversedItem = item.split("").reverse().join("");
    return item === reversedItem;
}

submit.addEventListener("click", checkPalindrome)
