import '../stylesheets/Display.css';

function Display({ input, output }) {
    return (
      <div id='screen' className='rounded'>
          <p id ='output'>{output}</p>
          <h1 id='display'>{input}</h1>
      </div>
    )
  }
  
  export default Display;