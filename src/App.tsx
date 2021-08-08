import React from 'react';
import { useState } from 'react'
import HeaderCard from './Header';
import TodoCard from './Todo';
import Task from './Task';
import FooterCard from './Footer';

function App() {

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
  }

  return (
    <div>

      {/* header section */}
      <HeaderCard name={"Phurin"} lastName={"Prasit"} student_id={630610753}></HeaderCard>

      {/* todo section */}
     <TodoCard></TodoCard>
      {/* footer section */}
      <FooterCard text ={"Copyright © 2021"} ></FooterCard>
    </div>
  );
}

export default App;
