const contents = [
  '스스로에게 WHY? 질문을 하는',
  '소소한 기록의 힘을 믿는',
  '동료학습의 가치를 아는',
];
const text = document.querySelector('.text');
let i = 0;
let contentIndex = 0;
let removing = false;

function typing() {
  if (!removing) {
    if (i < contents[contentIndex].length) {
      text.innerHTML += contents[contentIndex][i++];
    }
    if (i >= contents[contentIndex].length) {
      setTimeout(() => {
        removing = true;
      }, 1000);
    }
  } else {
    text.innerHTML = text.innerHTML.slice(0, --i);
    if (i === 0) {
      removing = false;
      contentIndex = (contentIndex + 1) % contents.length;
    }
  }
}
setInterval(typing, 200);

document.addEventListener('DOMContentLoaded', function () {
  const tooltip = document.querySelector('.tooltip');
  const email = tooltip.childNodes[0].nodeValue.trim();

  tooltip.addEventListener('click', function () {
    navigator.clipboard.writeText(email).then(
      function () {
        alert('클립보드에 복사되었습니다: ' + email);
      },
      function (err) {
        console.error('클립보드 복사 실패', err);
      }
    );
  });
});
