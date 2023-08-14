
function ispalindrome(str){
    const cleanStr=str.toLowerCase().replace(/[^a-z0-9]/g,'');
    // console.log(cleanStr);
    const revStr=cleanStr.split('').reverse().join('');
    // console.log(revStr);
    return cleanStr===revStr;
}

function palindromeChecker(params) {
    const inptext=document.getElementById('inputText');
    const res=document.getElementById('result');
    if(ispalindrome(inptext.value)){
        res.textContent=`"${inptext.value}" is a Palindrome`;
    }else{
        res.textContent=`"${inptext.value}" is not a Palindrome`;
    }
    res.classList.add('fadeIn');
    inptext.value='';
}


document.getElementById('checkBtn').
addEventListener("click",palindromeChecker);