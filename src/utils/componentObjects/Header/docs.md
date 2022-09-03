

## Example1

```js
import React, {useState} from 'react';
import {HeaderComp} from '@/component';

function App(){
  
  return <HeaderComp title="Home" />
}
export default App
```

## Tabs Props

| Name         | Description | Default | Example                                                                                           |
| :----------- | :---------- | :------ | :------------------------------------------------------------------------------------------------ |
| title*       | `string`    | -       | `<HeaderComp title="Home" />`                                                                     |
| userImage    | `string`    | -       | `<HeaderComp title="Home" userImage="https://reactjs.org/logo-og.png" />`                         |
| barIcon      | `node`      | -       | `<HeaderComp title="Home" barIcon={(style) => <BarIcon style={style} />}  />`                     |
| styleBarIcon | `object`    | -       | `<HeaderComp title="Home" barIcon={(style) => <BarIcon style={style} />} styleBarIcon={{...}} />` |
| styleTitle   | `object`    | -       | `<HeaderComp title="Home" styleTitle={{...}} />`                                                  |
| styleImage   | `object`    | -       | `<HeaderComp title="Home" userImage="https://reactjs.org/logo-og.png" styleImage={{...}} />`      |
