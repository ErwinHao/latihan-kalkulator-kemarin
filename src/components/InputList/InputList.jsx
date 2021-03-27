import Input from '../Input'

import './input-list.css';  

const InputList = ({ onChangeHandler }) => {
  return (
    <div className="input-list">
      <Input 
        type="number" 
        name="x"
        onChange={onChangeHandler}
      />
      <select 
        name="operator" 
        onChange={onChangeHandler}
      >
        <option>Pilih Operator</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <Input 
        type="number" 
        name="y"
        onChange={onChangeHandler}
      />
    </div>
  )
}

export default InputList
