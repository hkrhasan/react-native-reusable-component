## Example1

```js
import React, {useState} from 'react';
import {InputComp} from '@/component';

function App(){
  const [value, setValue] = useState('');

  return <InputComp value={value} setValue={setValue} />;
}
export default App
```



## Props

| Name                 | Description  | Default | Example                                                                                          |
| :------------------- | :----------- | :------ | :----------------------------------------------------------------------------------------------- |
| value*               | `string`     | -       | `<InputComp value={value} setValue={setValue} />`                                                |
| setValue*            | `() => void` | -       | `<InputComp value={value} setValue={setValue} />`                                                |
| error                | `string`     | -       | `<InputComp value={value} setValue={setValue} error="something went wrong!" />`                  |
| placeholder          | `string`     | -       | `<InputComp value={value} setValue={setValue} placeholder="name" />`                             |
| startIcon            | `node`       | -       | `<InputComp label="button" startIcon={(style) => <StartIcon style={style} />}>`                  |
| endIcon              | `node`       | -       | `<InputComp value={value} setValue={setValue} endIcon={(style) => <StartIcon style={style} />}>` |
| styleContainer       | `object`     | -       | `<InputComp value={value} setValue={setValue} styleContainer={{...}} />`                         |
| styleErrorText       | `object`     | -       | `<InputComp value={value} setValue={setValue} styleErrorText={{...}} />`                         |
| styleWrapper         | `object`     | -       | `<InputComp value={value} setValue={setValue} styleWrapper={{...}} />`                           |
| styleInput           | `object`     | -       | `<InputComp value={value} setValue={setValue} styleInput={{...}} />`                             |
| placeholderTextColor | `object`     | -       | `<InputComp value={value} setValue={setValue} placeholderTextColor={{...}} />`                   |

