## constants

```js
const data = [
  {
    route: 'Home',
    label: 'Home',
    activeIcon: (style) => <ActiveIcon style={style} />,
    inActiveIcon: (style) => <InActiveIcon style={style} />,
    component: Component
  },
  ...
]
```


## Tabs Props

| Name                 | Description                                    | Default | Example                                                  |
| :------------------- | :--------------------------------------------- | :------ | :------------------------------------------------------- |
| TabArr*              | `data`                                         | -       | `<BottomNav TabArr={data}>`                              |
| iconPosition         | `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"top"` | `<BottomNav TabArr={data} iconPosition="bottom">`        |
| tabBarStyle          | `object`                                       | -       | `<BottomNav TabArr={data} tabBarStyle={{...}}>`          |
| showLabel            | `boolean`                                      | -       | `<BottomNav TabArr={data} showLabel={false}>`            |
| tabBtnContainerStyle | `object`                                       | -       | `<BottomNav TabArr={data} tabBtnContainerStyle={{...}}>` |
| activeIconStyle      | `object`                                       | -       | `<BottomNav TabArr={data} activeIconStyle={{...}}>`      |
| inActiveIconStyle    | `object`                                       | -       | `<BottomNav TabArr={data} inActiveIconStyle={{...}}>`    |
| tabBtnStyleLabel     | `object`                                       | -       | `<BottomNav TabArr={data} tabBtnStyleLabel={{...}}>`     |



