import React, { useState } from 'react';
    import './calculat.css'
const Cal = () => {
    const [input,setiput] = useState('');

    const handleButtonClick = (e) => {
        const value = e.target.value;
        console.log(e.target.value);
        if(value === 'C'){
            setiput('');
            
        }else if(value === '='){
            try{
                setiput(eval(input).toString());
            }catch{
                setiput('Error')
            }
        }else{
            setiput(input + value);
        }
    }
    

  return (
    <div className='center'>  
    <div className="calculat">
        <div className='output'>
            <div className='result'>
               
                
        {input}
               
        </div>
        </div>
      <div className='bigbox'>
                <button className='box' onClick={handleButtonClick} value="%">%</button>
                <button className='box' onClick={handleButtonClick} value="(">(</button>
                <button className='box' onClick={handleButtonClick} value=")">)</button>
                <button className='box' onClick={handleButtonClick} value="C">C</button>
                <button className='box' onClick={handleButtonClick} value="7">7</button>
                <button className='box' onClick={handleButtonClick} value="8">8</button>
                <button className='box' onClick={handleButtonClick} value="9">9</button>
                <button className='box' onClick={handleButtonClick} value="/">/</button>
                <button className='box' onClick={handleButtonClick} value="4">4</button>
                <button className='box' onClick={handleButtonClick} value="5">5</button>
                <button className='box' onClick={handleButtonClick} value="6">6</button>
                <button className='box' onClick={handleButtonClick} display= 'x' value= '*' >x</button>
                <button className='box' onClick={handleButtonClick} value="1">1</button>
                <button className='box' onClick={handleButtonClick} value="2">2</button>
                <button className='box' onClick={handleButtonClick} value="3">3</button>
                <button className='box' onClick={handleButtonClick} value="-">-</button>
                <button className='box' onClick={handleButtonClick} value="0">0</button>
                <button className='box' onClick={handleButtonClick} value=".">.</button>
                <button className='box' onClick={handleButtonClick} value="=">=</button>
                <button className='box' onClick={handleButtonClick} value="+">+</button>
      </div>
      </div>
    </div>
  )
}

export default Cal