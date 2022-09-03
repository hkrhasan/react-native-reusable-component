# Buttons Props

| Name           | Description                                                             | Default                 | Example                                                                          |
| :------------- | :---------------------------------------------------------------------- | :---------------------- | :------------------------------------------------------------------------------- |
| label*         | `"string"`                                                              | -                       | `<ButtonComp label="button">`                                                    |
| type           | `"simple"` \| `"loading"`                                               | `"simple"`              | `<ButtonComp type="simple" label="button">`                                      |
| size           | `"small"` \| `"medium"` \| `"large"`                                    | `"medium"`              | `<ButtonComp size="medium" label="button">`                                      |
| btnStyle       | `"primary"` \| `"secondary"` \| `"success"` \| `"warning"` \| `"error"` | `"primary"`             | `<ButtonComp btnStyle="primary" label="button">`                                 |
| variant        | `"text"` \| `"contained"` \| `"outlined"`                               | `"contained"`           | `<ButtonComp variant="outlined" label="button">`                                 |
| startIcon      | `node`                                                                  | -                       | `<ButtonComp label="button" startIcon={(style) => <Component style={style} />}>` |
| endIcon        | `node`                                                                  | -                       | `<ButtonComp label="button" endIcon={(style) => <Component style={style} />}>`   |
| loader         | `node`                                                                  | `<ActivityIndicator />` | `<ButtonComp label="button" loader={(style) => <Component style={style} />}>`    |
| onPress        | `func`                                                                  | -                       | `<ButtonComp label="button" onPress={onPress}>`                                  |
| containerStyle | `object`                                                                | -                       | `<ButtonComp label="button" containerStyle={{backgroundColor: '#fff'}}>`         |
| textStyle      | `object`                                                                | -                       | `<ButtonComp label="button" containerStyle={{color: '#000'}}>`                   |




## Component helper functions

### onPress
```js
function onPress () {
  // body
}
```