import React, { useState, useEffect } from 'react';

const Contact = () => {
  // 세션 스토리지에서 상태 초기화
  const storedInputValue = sessionStorage.getItem('inputValue') || '';
  const [inputValue, setInputValue] = useState(storedInputValue);

  const onChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    console.log(value);
  };

  useEffect(() => {
    // 컴포넌트가 마운트 또는 상태가 업데이트될 때 세션 스토리지에 저장
    sessionStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  return (
    <section className='hero'>
      <h1>Welcome To Contact Page</h1>
      <input type='text' value={inputValue} onChange={onChange} />
    </section>
  );
};

export default Contact;
