import React from 'react';

function RadioButtonGroup(props) {
    let radioButtons = props.options.map(el => {
        return <span key={el.id}>
                <input type="radio" 
                  checked={props.selectedItem === el.id} 
                  name={props.name} 
                  value={el.id} 
                  onChange={() => props.onChangeEvent(el.id)}
                />
                {el.value}
                &nbsp;&nbsp;&nbsp;
            </span>
    })
    return (
      <div>
        {radioButtons}
        <br />
      </div>
    );
  }

  export default RadioButtonGroup;