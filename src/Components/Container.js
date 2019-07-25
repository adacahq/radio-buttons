import React from 'react';
import RadioButton from './RadioButton';

const Container = (props) => {
    return (
        <div>
            {
                props.arrayData.map((row, index) => {
                    return (
                        <div className="container-radio-button">
                            <RadioButton onChange={props.onChange} row={row} groupNumber={index} selectedValue={props.selectedValues[index]} />
                        </div>
                    )
                })
            }
        </div>
    );
}


export default Container;