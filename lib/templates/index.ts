export const classComponent = `
export class :ComponentName extends React.Component {
  
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className=":ComponentName">
    
      </div>
    )
  }
}

:ComponentName.propTypes = {
}

export default :ComponentName;
`

export  const functionalComponent = `
/*
 * :ComponentName
 * Add description for your component
 */ 
export const :ComponentName = (props) => {
  :Declarations
  return (
    <div className=":ComponentName">
    </div>
  )
}

:ComponentName.propTypes = {
}

export default :ComponentName;
`

export const declarations = {
  useState: `const [state, setstate] = useState(null)`,
  useEffect: `
  useEffect(() => {
    // effect
    return () => {
      // cleanup
    }
  }, [/* input */ ])
  `,
  useContext: `const context = useContext(/* contextValue */)`,
  useMemo: `useMemo(() => {/* function */}, /* input */)`,
  useRef: `const ref = useRef(/* initialValue */)`,
  useReducer: `const [state, dispatch] = useReducer(/* reducer */, /* initialState */, /* init */)`,
  useDispatch: `const dispatch = useDispatch(/* function */)`
}


export const styleClass = `
.:ComponentName {
  /* Put your component styles here ;) */
}
`

export  const imports = {
  styles: "import './index.scss'",
  react: "import React:AdditionalImports from 'react'",
  propTypes: "import PropTypes from 'prop-types'",
  useState: 'useState',
  useEffect: 'useEffect',
  useContext: 'useContext',
  useMemo: 'useMemo',
  useRef: 'useRef',
  useReducer: 'useReducer',
  useDispatch: 'useDispatch',
}

