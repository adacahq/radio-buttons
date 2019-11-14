# Radio Buttons

Create an interactive and dynamic HTML form in JavaScript***.  The form should render multiple groups of radio buttons.

_***You are welcome to solve the problem using vanilla ES5/6/7, TypeScript, React, Vue or Angular. Feel free to use your own tools or libraries that you like._

Add a submit button at the bottom that is only enabled when a valid option from all groups has been selected.

Please showcase your use of semantic HTML and modern CSS.

---
The radio-button groups should be dynamically rendered based on the following data, which you can imagine has come back from an API response:

```javascript
{
  menus: [
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
  ],
  rules: {
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
}
```

Initially, only items from the first group are able to be selected. Inputs in subsequent groups are to be initially disabled.

When an item from the first group is selected, valid items from the next group are enabled.

Valid items are specified in the set of rules.  This is an object where the key is the ID of an option, and the value is an array containing the IDs of options which are NOT compatible.

Items groups should remain disabled until an item in the previous group is selected.

## Evaluation
Feel free to ask your tester any questions you need to ask if need be, or if you need any clarification on the requirements.

When complete, create a private repository in GitHub and invite these users to access your repo `lambrosphotios`.

We will evaluate your response based on the following criteria:

* Problem solving and design approach.
* Architectural approach / programming paradigms used. We preference a functional/immutable style; while you don't have to follow this, you're encouraged to show off these skills if you are familiar with them.  Keeping consistency within whatever paradigm you use is, however, important.
* Best practices within the chosen frame.
* Consistency in style, readability, naming conventions.
* Code should be easy to read and understand.  Self-explanitory variable/function/method names, with little to no comments required.
* Reduce code duplication, minimise nested indentation (ie pyramids of doom); prefer use of abstracting functionality.
