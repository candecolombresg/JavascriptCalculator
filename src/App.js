import './App.css';
import Button from './components/Button';
import Display from './components/Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState(0);
  const [output, setOutput] = useState('');


  const clear = () => {
    setInput(0);
    setOutput('');
  };

  const handleClick = val => {

    const Operator = value => {
      return isNaN(value) && (value !== '.');
    }

    setInput(
      input == 0 
      ? val
      : /=/.test(output) ? Operator(val) ? input + val : val
      : /\.\d*$/.test(input) == true && val === '.'
          ? input
          : ((Operator(val)) | Operator(input)) 
            ? val 
            : input + val);
    setOutput(
      /=/.test(output) 
      ? Operator(val) ? input + val : val
      : output == 0 
        ? val : /\.\d*$/.test(input) == true && val === '.' ? output
        : /[\*\/\+]+\-$/.test(output) && Operator(val)
          ? output.replace(/[\*\/\+]+\-$/, '') + val 
          :(Operator(input) && Operator(val) && val !== '-') 
            ? output.slice(0, -1) + val 
            : output + val);
  };

  const calculateResult = () => {
    setInput(evaluate(output));
    setOutput(output + '=' + evaluate(output));
  };

  return (
    <div className='App'>
      <div className="d-grid container-xs col-lg-3 col-md-4 col-sm-6 col-xs-8" id='container'>
        <div className="row g-0">
          <Display input={input} output={output} />
        </div>
        <div className="row">
          <div className="col-6">
            <button 
              className="btn btn-danger btn-lg" 
              onClick={clear}
              id="clear">
                AC
            </button>
          </div>
          <Button handleClick={handleClick} col='3' id='divide'>/</Button>
          <Button handleClick={handleClick} col='3' id='multiply'>*</Button>
        </div>
        <div className="row">
          <Button handleClick={handleClick} col='3' id='seven'>7</Button>
          <Button handleClick={handleClick} col='3' id='eight'>8</Button>
          <Button handleClick={handleClick} col='3' id='nine'>9</Button>
          <Button handleClick={handleClick} col='3' id='subtract'>-</Button>
        </div>
        <div className="row">
            <Button handleClick={handleClick} col='3' id='four'>4</Button>
            <Button handleClick={handleClick} col='3' id='five'>5</Button>
            <Button handleClick={handleClick} col='3' id='six'>6</Button>
            <Button handleClick={handleClick} col='3' id='add'>+</Button>
        </div>
        <div className="row">
          <div className='col-9'>
            <div className="row">
              <Button handleClick={handleClick} col='4' id='one'>1</Button>
              <Button handleClick={handleClick} col='4' id='two'>2</Button>
              <Button handleClick={handleClick} col='4' id='three'>3</Button>
            </div>
            <div className="row">
              <Button handleClick={handleClick} col='8' id='zero'>0</Button>
              <Button handleClick={handleClick} col='4' id='decimal'>.</Button>
            </div>
          </div>
          <div className='col-3'>
            <Button handleClick={calculateResult} col='12' id='equals'>=</Button>
          </div>
        </div>
        
      </div>
      <footer><br /><p className='text-center'>Designed and coded by Candelaria Colombres Garmendia</p></footer> 
    </div>
  );
}

export default App;
