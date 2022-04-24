function checkSpam(str) {
  let x = str.toLowerCase();
  if (x.includes('1xBet'.toLowerCase()) || x.includes('XXX'.toLowerCase())) {
    return true;
  }
  return false;
}
