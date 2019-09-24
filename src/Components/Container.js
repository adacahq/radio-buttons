import React from 'react';
import RadioButtonGroup from './RadioButtonGroup';

const radioButtonData = [
    // first group of radio-buttons
    [
      { id: '101', value: 'Vegetarian' },
      { id: '102', value: 'Nut allergy' },
      { id: '103', value: 'Halal' }
    ],
    // second group of radio-buttons
    [
      { id: '201', value: 'Cashew chicken' },
      { id: '202', value: 'Sweet and sour pork' },
      { id: '203', value: 'Stir fried Tofu' },
      { id: '204', value: 'Vegetable fried rice' },
      { id: '205', value: 'Pad Thai' },
      { id: '206', value: 'Massaman beef' },
    ],
    // third group of radio-buttons
    [
      { id: '301', value: 'Peanut sauce' },
      { id: '302', value: 'Oyster sauce' },
      { id: '303', value: 'Vegetable spring rolls' },
      { id: '304', value: 'Steamed rice' },
    ],
  ];

  

export default class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          radio: [
            {
              id: null,
              enabled: true
            },
            {
              id: null,
              enabled: false
            },
            {
              id: null,
              enabled: false
            }
        ]
      };
    }
    updateSelectedItem(index, id){
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.radio[index].id = id;

        //when an item is selected, the radio button group/s below will reset
        if(index === 0){
            stateCopy.radio[1].id = null;
            stateCopy.radio[2].enabled = false;
            stateCopy.radio[2].id = null;
        }
        if(index === 1){
            stateCopy.radio[2].id = null;
        }

        if(stateCopy.radio[0].id){
            stateCopy.radio[1].enabled = true;
        }
        if(stateCopy.radio[1].id){
            stateCopy.radio[2].enabled = true;
        }
        
        this.setState(stateCopy);
    }
    filterByRules(data){
        const radioButtonRules = {
            // 'Vegetarian' is NOT compatible with 'Cashew chicken', 'Sweet and sour pork', 'Massaman beef', 'Oyster sauce'
            101: [201, 202, 206, 302], 
            // 'Nut allergy' is NOT compatible with 'Cashew chicken', 'Peanut sauce',
            102: [201, 301], 
            // 'Halal' is NOT compatible with 'Sweet and sour pork',
            103: [202], 
            // 'Vegetable fried rice' is NOT compatible with 'Steamed rice' (you don't need more rice... carb overload),
            204: [304],
            // 'Pad thai' is NOT compatible with 'Steamed rice' (Pad thai comes with noodles),
            205: [304],
        }
        let unAllowedIds = [];
        this.state.radio.forEach(el =>{
            if(el.id && radioButtonRules[el.id]){
                unAllowedIds = unAllowedIds.concat(radioButtonRules[el.id])
            }
        })
        return data.filter(datum => {
            return !unAllowedIds.includes(parseInt(datum.id));
        })
    }
    render() {
        var self = this;
        let updateSelectedItem = this.updateSelectedItem.bind(this);
        let radioButtonGroups = this.state.radio.map((el, index) => {
            let data = self.filterByRules(radioButtonData[index])
            if (el.enabled){
                return <RadioButtonGroup 
                        key={"radio-button-group-" + index} 
                        selectedItem={el.id} options={data} 
                        name={"radio-button-group-" + index} 
                        onChangeEvent={(id) => {updateSelectedItem(index,id)}}
                        />
            }
            else{
                return null;
            }
        })
        return (
        <div>
            <h1>Station Five tech test</h1>
            {radioButtonGroups}
            <br/>
            {this.state.radio[2].id ? <input type="submit" value="Submit"/> : null }
        </div>
        );
    }
  }