module.exports = function check(str, bracketsConfig) {
  var count = 0;
  var array = [];
  var newStr = str;
  for (var i = 0; i < newStr.length; i++) {
    if (newStr[i] == '(') {
      array.push(newStr[i]);
      count = i;
    } else if (newStr[i] == ')' && newStr[count] == '(') {
      array.pop();
      count--;
    } else if (newStr[i] == '[') {
      array.push(newStr[i]);
      count = i;
    } else if (newStr[i] == ']' && newStr[count] == '[') {
      array.pop();
      count--;
    } else if (newStr[i] == '{') {
      array.push(newStr[i]);
      count = i;
    } else if (newStr[i] == '}' && newStr[count] == '{') {
      array.pop();
      count--;
    } else if (newStr[i] == '|') {
      array.push(newStr[i]);
      count = i;
    } else if (newStr[i] == '|' && newStr[count] == '|') {
      array.pop();
      count--;
    }
  }

  if (array.length > 0) {
    return false;
  } else {
    return true;
  }
}
