import React from 'react';

const RadioButton = (props) => {
    return (
        <div>
            {
                props.row.map((item, index) => {
                    return (
                        <div>
                            <label>{item.value}</label>
                            <input type="radio" disabled={item.disabled} name={item.groupNumber} checked={props.selectedValue.selected === item.id ? true : false} key={index} onChange={() => props.onChange(item, props.groupNumber)} />
                        </div>
                    )
                })
            }
        </div>
    );
}


export default RadioButton;