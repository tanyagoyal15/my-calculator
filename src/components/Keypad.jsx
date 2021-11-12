const Keypad = props => {
    let topKeys = ['C','+/-', '%']
    let rightKeys = ['+', '-','*', '/', '=']
    let keys = props.keys.map(key => (
        <button 
            className={topKeys.includes(key) ? 'top-keys' : rightKeys.includes(key) ? 'right-keys' : 'number-keys'} 
            onClick={(e) => props.handleOnClick(e)}>{key}
        </button>
    ))

    return <div className="keypad">{keys}</div>
}

export default Keypad;