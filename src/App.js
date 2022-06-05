/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

//얘도 실은 컴포넌트임
function App() {
  let post = "강남 우동 맛집"; //자료 잠깐 저장할 땐 변수
  let [글제목, 글제목변경] = useState([
    "남자코트추천",
    "강남우동맛집",
    "파이썬독학",
  ]); // 글제목:state에 보관했던 자료, b:state 변경 도와주는 함수
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  //1. 함수 안에 있는 코드들을 array 자료 개수만큼 실행함
  //2. 함수의 파라미터는 array안에 있던 자료임
  //3. return에 뭐 적으면 array로 담아줌
  [1, 2, 3].map(function (a) {
    return "123123123";
  });

  //긴 코드를 한 단어로 묶어주는 문법
  function 함수() {
    console.log(1);
  }

  //state 문법 언제 사용하지?
  // 변수와 state 차이점?
  // 일반 변수는 갑자기 변경되면 html에 자동으로 반영 안 됨
  // 하지만 변수와 다르게 state는 변경되면 html이 자동 재렌더링됨
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <button
        onClick={() => {
          let arr = [...글제목];
          arr.sort();
          글제목변경(arr);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let arr = [1, 2, 3];
          let copy = [...글제목];
          copy[0] = "여자코트추천";
          글제목변경(copy);
        }}
      >
        {" "}
        글 수정
      </button> */}

      {/* <div className="list">
        <h4>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍🏻
          </span>{" "}
          {따봉}
        </h4>
        <p>6월 4일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>6월 4일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            if (modal == true) setModal(false);
            else setModal(true);
          }}
        >
          {글제목[2]}
        </h4>
        <p>6월 4일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        //i는 반복문 돌 때마다 0부터 1씩 증가하는 정수
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
                setTitle(0);
              }}
            >
              {글제목[i]}{" "}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍🏻
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>6월 4일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          setTitle(0);
        }}
      >
        글제목0
      </button>
      <button
        onClick={() => {
          setTitle(1);
        }}
      >
        글제목1
      </button>
      <button
        onClick={() => {
          setTitle(2);
        }}
      >
        글제목2
      </button>
      {modal == true ? (
        <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}

//이렇게 해도 컴포넌트가 됨
// let Modal = () => {
//   return(
//     <div></div>
//   )
// }

//const로 만들었는데 나중에 수정할 경우 에러메시지가 뜸

//컴포넌트생성 (보통 대문자로 시작)
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글 수정</button>
    </div>
  );
}

//return() 안에는 병렬로 <div> 태그 두개이상 x
export default App;
