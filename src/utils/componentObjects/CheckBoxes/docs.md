## Notes

> `checked` is required in checkbox state

## Example1

```js
import React, {useState} from 'react';
import {CheckBoxesComp} from '@/component';

function App(){
  const [list, setList] = useState([
    {
      title: 'option1',
      checked: false,
    },
    {
      title: 'option2',
      checked: false,
    }
  ])

  return <CheckBoxesComp list={list} setList={setList} />
}
export default App
```



## Props

| Name         | Description                                    | Default  | Example                                                               |
| :----------- | :--------------------------------------------- | :------- | :-------------------------------------------------------------------- |
| list*        | `[{title: string, checked: boolean}, ...]`     | -        | `<CheckBoxesComp list={list}>`                                        |
| setList*     | `() => void`                                   | -        | `<CheckBoxesComp list={list} setList={setList}>`                      |
| styleWrapper | `object`                                       | -        | `<CheckBoxesComp list={list} setList={setList} styleWrapper={{...}}>` |
| color        | `string`                                       | -        | `<CheckBoxesComp list={list} setList={setList} color="#000">`         |
| boxPosition  | `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"left"` | `<BottomNav TabArr={data} tabBtnContainerStyle={{...}}>`              |
|              |

