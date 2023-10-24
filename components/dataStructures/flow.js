// tenerary operators
function isUserValid(bool) {
  return bool;
}
var answer = isUserValid(true) ? "you may enter" : "access denied";
var automatedAnswer = "your account # is  "(
  isUserValid(false) ? "1234" : "not available"
);
