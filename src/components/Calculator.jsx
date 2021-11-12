import Input from './Input';
import Keypad from './Keypad';

const keys = ['C', '+/-', '%' , '/' ,'7', '8', '9' , '*', '4', '5', '6' , '-', '1', '2', '3' , '+' , '0' , ' ' , ',' , '=']

const Calculator = props => {
    return <div className="calculator"> 
        <Input value={props.value}/> 
        <Keypad keys={keys} handleOnClick={props.handleOnClick}/> 
    </div>
}
export default Calculator;