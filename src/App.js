import React, {useState} from 'react';
import './App.css';

function App() {
  // 상태 관리를 위한 useState 사용
  const [title, setTitle] = useState(['페이스계산기', '대회 일정', '참고 자료']);
  const [count, setCount] = useState(0); // 클릭 수 저장
  const [speed, setSpeed] = useState(''); // 입력된 속도 저장
  const [pace, setPace] = useState(null); // 계산된 페이스 저장

  const func = () => {
    return 100;
  };

  // 클릭 이벤트 핸들러 함수
  const handleClick = () => {
    setCount(count + 1);
  };

  // 입력 필드 변경 이벤트 핸들러 함수
  const handlerSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  // 페이스 계산 함수
  const calculatePace = () => {
    if(speed > 0){
      const pace = (60 / speed).toFixed(2); // 속도에 따른 페이스
      setPace(pace);
    }else{
      setPace(null);
    }
  };

  // 개인 블로그로 이동하는 함수
  const navigateToBlog = () => {
    window.location.href = "http://pss0208.github.io"
  };

  // 대회 페이스 계산기로 이동하는 함수
  const navigateToPaceCalculator = () => {
    window.open("http://marathon.pe.kr/pds/pace_calculator.html", "_blank");
  };

  // 공식 마라톤 일정 페이지로 이동하는 함수
  const marathonOnline = () => {
    window.open("http://www.marathon.pe.kr/index_calendar.html");
  };

  // 참고한 블로그로 이동하는 함수
  const navigateToRef = () => {
    window.open('https://blog.naver.com/yiyangse/223501718260');
  };

  return (
    <div className='App'>
      {/* 상단 네비게이션 바 */}
      <div className='orange-nav'>
        <div>
          <h1>리액트 연습</h1>
          <p>토이프로젝트</p>
          <button className='navigateToBlog' onClick={navigateToBlog}>개인 블로그로 이동</button>
        </div>
      </div>
      {/* 글 목록 섹션 */}
      <div className='list'>
        {/* 첫 번째 글 제목과 좋아요 버튼 */}
        <h3>
          {title[0]} <span onClick={handleClick}>👍</span>{count}
        </h3>
        {/* 페이스 변환 섹션 */}
        <div className='converter'>
          <h5>트레드밀 페이스 변환이 필요하신가요?</h5>
          <input
            type='number'
            value={speed}
            onChange={handlerSpeedChange}
            placeholder='속도(km/h) 예시)10'
          />
          <button onClick={calculatePace}>변환</button>
          {/* 계산된 페이스 표시 */}
          {pace && <h5>러닝 페이스: {pace} km/min</h5>}
          {/* 대회 페이스 계산기로 이동하는 버튼 */}
          <div className='pace-calculator'>
            <h5>대회 페이스 산출이 필요하신가요?</h5>
            <button className='navigateToPaceCalculator' onClick={navigateToPaceCalculator}>대회 페이스 계산기</button>
          </div>
          <p>@pss</p>
          <hr />
        </div>
      </div>
      {/* 두 번째 글 목록 섹션 */}
      <div className='list'>
        <h3>{title[1]}</h3>
        <h5>🍂가을의 전설이 되는 날까지</h5>
        {/* 공식 마라톤 일정으로 이동하는 버튼 */}
        <div className='marathonOnline'>
          <button className='marathonOnline' onClick={marathonOnline}>공식 일정</button>
        </div>
        <p>@pss</p>
        <hr />
      </div>
      {/* 세 번째 글 목록 섹션 */}
      <div className='list'>
        <h3>{title[2]}</h3>
        <h5>참고</h5>
        {/* 참고한 블로그 */}
        <div className='navigateToRef'>
          <button className='navigateToRef' onClick={navigateToRef}>참조 블로그로 이동</button>
        </div>
        <p>@pss</p>
      </div>      
    </div>
  );
}

export default App;
