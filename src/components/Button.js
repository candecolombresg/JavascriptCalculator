import '../stylesheets/Button.css';

function Button(props) {

  const Operator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  }

  return (
    <div className={`col-${props.col}`}>
        <button 
          id={props.id}
          className= {`btn btn-${Operator(props.children) ? 'light' : 'secondary'} btn-lg`}
          value= {props.children}
          onClick = {() => props.handleClick(props.children)}>
            {props.children}
        </button>
    </div>
  )
}

export default Button;