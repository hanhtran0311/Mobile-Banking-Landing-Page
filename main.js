// Làm bài
function getCanVoteMessage(age) {
  var canVote = age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu";
  return canVote;
}

// Kỳ vọng
console.log(getCanVoteMessage(18)); // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)); // 'Bạn chưa được bỏ phiếu'
