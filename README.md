<div style="text-align: center">
  <h1>reactjs-cli-tools a minimalist CLI for React</h1>
  <img src="https://raw.githubusercontent.com/manudevcode/react-cli/dev/assets/banner.png" alt="A minimalist CLI for React" />
  <br/>
  <br/>
  <img src="https://nodei.co/npm/reactjs-cli-tools.png" alt="NPM stats" />
  <br/>
  <br/>
  I developed this tool while I was learning a little more JavaScript and it has helped me a lot when developing with React, it is simple and easy to use, I hope it will also help you.

</div>
<br/>

The official page of the tool is under construction if you want to help in the creation of the theme you can support this project in the sponsors button or [here](https://github.com/sponsors/manudevcode).

Created by [Manu Codes](https://github.com/manudevcode)

---

## Installation

`npm i -g reactjs-cli-tools`
(try with sudo if it doesn't work)

## Usage

Currently it only works to create components and you can do it in the following way:

run `reactjs generate | g  component | c <componentName> <directory> <ptions>`

### Options

  `-S, --style`: Create index.scss at the component folder

  `-F, --functional`: Create a functional component

  `-TS, --typscript`: Use .tsx extention

  `-T, --test`: Add .test.tsx file for tests
 
  `-ust, --useState`: Implements useState hook

  `-uef, --useEffect`: Implements useEffect hook

  `-uco, --useContext`: Implements useContext hook

  `-ume, --useMemo`: Implements useMemo hook

  `-ure, --useRef`: Implements useRef hook

  `-urd, --useReducer`: Implements useReducer hook

  `-udi, --useDispatch`: Implements useDispatch hook

  `-h, --help`: display help for command

#Example 

The following command create a <a href="https://es.reactjs.org/docs/components-and-props.html#function-and-class-components" target="_blank"> Functional Component </a> with an implementation of <a href="https://reactjs.org/docs/hooks-overview.html#state-hook" target="_blank"> useState </a> and <a href="https://reactjs.org/docs/hooks-overview.html#effect-hook" target="_blank">useEffect</a> hook and a index.scss file for the component style:

`reactjs g c Button ./components -F -S -ust -uef`

Result:

```
components
  Button/ 
    index.jsx
    index.scss
...
```

index.jsx: 

```js
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

/*
 * Button
 * Add description for your component
 */ 
export const Button = (props) => {
  const [state, setstate] = useState(null)
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    }
  }, [/* input */ ])
  return (
    <div className="Button">
    </div>
  )
}

Button.propTypes = {
}

export default Button;
```

index.scss:

```scss
.Button {
  /* Put your component styles here ;) */
}
```



#### Fixes & Enhancements

reactjs-cli-tools is a young tool and there is still much to add, such as support for test and react native.