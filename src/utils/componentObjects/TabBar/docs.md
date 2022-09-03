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

| Name              | Description                                    | Default | Example                                                |
| :---------------- | :--------------------------------------------- | :------ | :----------------------------------------------------- |
| TabArr*           | `data`                                         | []      | `<TabBarComp TabArr={data}>`                           |
| iconPosition      | `"top"` \| `"bottom"` \| `"left"` \| `"right"` | `"top"` | `<TabBarComp TabArr={data} iconPosition="bottom">`     |
| styleTabContainer | `object`                                       | -       | `<TabBarComp TabArr={data} styleTabContainer={{...}}>` |
| styleTabrow       | `object`                                       | -       | `<TabBarComp TabArr={data} styleTabrow={{...}}>`       |
| styleActiveIcon   | `object`                                       | -       | `<TabBarComp TabArr={data} styleActiveIcon={{...}}>`   |
| styleInActiveIcon | `object`                                       | -       | `<TabBarComp TabArr={data} styleInActiveIcon={{...}}>` |
| styleTitle        | `object`                                       | -       | `<TabBarComp TabArr={data} styleTitle={{...}}>`        |



 