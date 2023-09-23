function isPalindrome(n) {
    const strNum = n.toString();
    const reversedStr = strNum.split('').reverse().join('');
    return strNum === reversedStr;
  }
  function palindromize(num){
      let iterations = 0;
  
      while (!isPalindrome(num)) {
          const reversedNum = parseInt(num.toString().split('').reverse().join(''), 10);
          num += reversedNum;
          iterations++;
      }
  
      return `${iterations} ${num}`;
  }