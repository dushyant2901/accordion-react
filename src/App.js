import React, { useState } from 'react';
import data from './data';
import Question from './Question';

function App() {
  const [quesions, setQuesions] = useState(data)
  return <main>
    <div className="container">
      <h2>Accordion</h2>
      <section className='info'>
      {quesions.map((question)=>{
        return< Question key={question.id}{...question} />
      })}
      </section>
    </div>
  </main>;
}

export default App;
