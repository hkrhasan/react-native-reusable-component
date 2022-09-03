## Example1

```js
import React, {useState} from 'react';
import {InputPassComp} from '@/component';

function App(){
  const [value, setValue] = useState('');

  return <InputPassComp value={value} setValue={setValue} />; 
}
export default App
```



## Props

| Name                 | Description  | Default | Example                                                                                              |
| :------------------- | :----------- | :------ | :--------------------------------------------------------------------------------------------------- |
| value*               | `string`     | -       | `<InputPassComp value={value} setValue={setValue} />`                                                |
| setValue*            | `() => void` | -       | `<InputPassComp value={value} setValue={setValue} />`                                                |
| error                | `string`     | -       | `<InputPassComp value={value} setValue={setValue} error="something went wrong!" />`                  |
| placeholder          | `string`     | -       | `<InputPassComp value={value} setValue={setValue} placeholder="name" />`                             |
| endIcon              | `node`       | -       | `<InputPassComp value={value} setValue={setValue} endIcon={(style) => <StartIcon style={style} />}>` |
| styleContainer       | `object`     | -       | `<InputPassComp value={value} setValue={setValue} styleContainer={{...}} />`                         |
| styleErrorText       | `object`     | -       | `<InputPassComp value={value} setValue={setValue} styleErrorText={{...}} />`                         |
| styleWrapper         | `object`     | -       | `<InputPassComp value={value} setValue={setValue} styleWrapper={{...}} />`                           |
| styleInput           | `object`     | -       | `<InputPassComp value={value} setValue={setValue} styleInput={{...}} />`                             |
| placeholderTextColor | `object`     | -       | `<InputPassComp value={value} setValue={setValue} placeholderTextColor={{...}} />`                   |

