## Notes

> `id` and `selected`, `label` is required in button state

## Example1

```js
import React, {useState} from 'react';
import {RadioButtonsComp} from '@/component';

function App(){
  const [list, setList] = useState([
  {id: 1, label: 'option1', selected: false},
  {id: 2, label: 'option2', selected: false},
  {id: 3, label: 'option2', selected: false},
  {id: 4, label: 'option2', selected: false},
])

  return <RadioButtonsComp list={list} setList={setList} />
}
export default App
```


 styleBtnWrapper,
    onPress,
    selected,
    styleBtnOuter,
    styleBtnInner,
    styleBtnTitle,
    btnPosition,
    label,
    showLabel,

## Tabs Props

| Name            | Description                                | Default | Example                                                                    |
| :-------------- | :----------------------------------------- | :------ | :------------------------------------------------------------------------- |
| list*           | `[{title: string, checked: boolean}, ...]` | -       | `<RadioButtonsComp list={list}>`                                           |
| setList*        | `() => void`                               | -       | `<RadioButtonsComp list={list} setList={setList}>`                         |
| styleBtnWrapper | `object`                                   | -       | `<RadioButtonsComp list={list} setList={setList} styleBtnWrapper={{...}}>` |
| styleBtnOuter   | `object`                                   | -       | `<RadioButtonsComp list={list} setList={setList} styleBtnOuter={{...}}>`   |
| styleBtnInner   | `object`                                   | -       | `<RadioButtonsComp list={list} setList={setList} styleBtnInner={{...}}>`   |
| styleBtnTitle   | `object`                                   | -       | `<RadioButtonsComp list={list} setList={setList} styleBtnTitle={{...}}>`   |
| showLabel       | `boolean`                                  | `true`  | `<RadioButtonsComp list={list} setList={setList} showLabel={false}>`       |
