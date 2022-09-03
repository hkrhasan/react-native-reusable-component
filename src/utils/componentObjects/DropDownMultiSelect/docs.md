## Example1

```js
import React, {useState} from 'react';
import {DropDownMultiSelect} from '@/component';

function App(){
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    {label: 'Option1', value: 'option1'},
    {label: 'Option2', value: 'option2'},
    {label: 'Option3', value: 'option3'},
  ]);

  return <DropDownMultiSelect
          value={value}
          setValue={setValue}
          items={items}
          setItems={setItems}
        />
}
export default App
```



## This component is third party package if you want full documentation click [here](https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage)