import './display-number.css';

const DisplayNumber = ({ result }) => {
  return (
    <div className="display-number">
      <h2>{result}</h2>
    </div>
  )
}

export default DisplayNumber
