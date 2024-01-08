// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Write = () => {
//   // 세션 스토리지에서 상태 초기화
//   const storedInputValue = sessionStorage.getItem('inputValue') || '';
//   const [inputValue, setInputValue] = useState(storedInputValue);

//   const onChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);
//     console.log(value);
//   };

//   useEffect(() => {
//     // 컴포넌트가 마운트 또는 상태가 업데이트될 때 세션 스토리지에 저장
//     sessionStorage.setItem('inputValue', inputValue);
//   }, [inputValue]);

//   return (
//     <section className='hero'>
//       <form>
//         제목 : <input type='text' value={inputValue} onChange={onChange} style={{
//           width: '60%',
//           height: '30px',
//           paddingLeft: '10px',
//           border: 'none',
//           borderBottom : '2px solid black',
//           marginBottom : '60px',
//           outline : 'none',
//           fontSize : '19px',
//           fontWeight : '600',
//           marginTop : '150px'
//         }}/> <br/>
//         내용 : <textarea style={{
//           width : '60%',
//           height: '300px',
//           paddingLeft: '10px',
//           border: '2px solid black',
//           borderBottom : '2px solid black',
//           marginBottom : '10px',
//           outline : 'none'
//         }} rows="3"></textarea>
//         <br/>

//         <button type="button" className="btn btn-primary btn-lg">Write</button>
//         <button type="button" className="btn btn-secondary btn-lg">Cancel</button>
//       </form>
//     </section>
//   );
// };

// export default Write;
