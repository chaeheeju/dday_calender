// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "여보 안녕.. 우리 올해 많은 일이 있었네" },
  { "number": 2, "message": "여보는 올해 최애의 아이에 푹 빠지기도 하고" },
  { "number": 3, "message": "의다살에 빠져 등신같은 시계를 7만원에 사기도 했었지" },
  { "number": 4, "message": "도쿄구울도 열심히봤잖아.. 좀 황당했지만" },
  { "number": 5, "message": "우리 그동안 탕후루도 열심히 먹고" },
  { "number": 6, "message": "연어초밥도 맘껏 먹었던 즐거운 해였던 거같아" },
  { "number": 7, "message": "앗.. 사마현이 편지를 가져왔네, 열어봐! " },
  { "number": 8, "message": " " },
  { "number": 9, "message": "올해 나를 많이 찾아줘서 고마워." },
  { "number": 10, "message": "매일이 행복으로 가득찬 24일이 되길." },
  { "number": 11, "message": "정민아 메리크리스마스.^^" },
  { "number": 12, "message": "오랜만이군, 여자친구랑 행복하게 잘 살도록!" },
  { "number": 13, "message": "눈아 크리스마스엔 머리 깜아요" },
  { "number": 14, "message": "...24일엔 맛있는 걸 드십시오" },
  { "number": 15, "message": "행복한 크리스마스 보내." },
  { "number": 16, "message": "...오랜만이네. 메리 미리 크리스마스" },
  { "number": 17, "message": "누나, 내년에도 저 보러 와주실거죠?" },
  { "number": 18, "message": "누나 전 안 보러 와도 돼요^^ 가끔 생각해줘요." },
  { "number": 19, "message": "저처럼 매운 거 드시지 마시고 행복한 24일 보내세요ㅠㅠ" },
  { "number": 20, "message": "다 함께하는 24일, 행복한 느낌이 가득할 거예요" },
  { "number": 21, "message": "행복이 자네와 함께하기를" },
  { "number": 22, "message": "앞으로 이틀 남았어요." },
  { "number": 23, "message": "꺅 꺄악 꺄악~!!!" },
  { "number": 24, "message": "정민아 메리 크리스마스!! 내년에도 잘 부탁해!!!" }
];
