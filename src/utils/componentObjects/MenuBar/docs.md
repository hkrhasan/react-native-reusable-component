## Example1

```js
import React, {useState} from 'react';
import {MenuBarComp} from '@/component';

function App(){

  return <MenuBarComp label="Home" route="Home" />;
}
export default App
```



## Props

| Name             | Description                             | Default | Example                                                                                             |
| :--------------- | :-------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------- |
| label*           | `string`                                | -       | `<MenuBarComp label="Home" route="Home" />`                                                         |
| route*           | `string`                                | -       | `<MenuBarComp label="Home" route="Home" />`                                                         |
| startIcon        | `node`                                  | -       | `<MenuBarComp label="button" startIcon={(style) => <StartIcon style={style} />}>`                   |
| endIcon          | `node`                                  | -       | `<MenuBarComp label="Home" route="Home" endIcon={(style) => <StartIcon style={style} />}>`          |
| endIconFullRight | `node`                                  | -       | `<MenuBarComp label="Home" route="Home" endIconFullRight={(style) => <StartIcon style={style} />}>` |
| parentProps      | `DrawerContentComponentProps`           | -       | `<MenuBarComp label="Home" route="Home" parentProps={props} />`                                     |
| childs           | `[{label: string, route: string}, ...]` | -       | `<MenuBarComp label="Home" route="Home" childs={[{label: "Drop1", route: Drop1}]} />`               |
| activeRoute      | `string`                                | -       | `<MenuBarComp label="Home" route="Home" activeRoute="Home" />`                                      |
| styleInput       | `object`                                | -       | `<MenuBarComp label="Home" route="Home" styleInput={{...}} />`                                      |
| styleContainer   | `object`                                | -       | `<MenuBarComp label="Home" route="Home" styleContainer={{...}} />`                                  |
| stylePressable   | `object`                                | -       | `<MenuBarComp label="Home" route="Home" stylePressable={{...}} />`                                  |
| dept             | `number`                                | -       | `<MenuBarComp label="Home" route="Home" dept={2} />`                                                |

