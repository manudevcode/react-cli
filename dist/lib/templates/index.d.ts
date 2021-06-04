export declare const classComponent = "\nexport class :ComponentName extends React.Component {\n  \n  constructor(props){\n    super(props);\n  }\n\n  render(){\n    return (\n      <div className=\":ComponentName\">\n    \n      </div>\n    )\n  }\n}\n\n:ComponentName.propTypes = {\n}\n\nexport default :ComponentName;\n";
export declare const functionalComponent = "\n/*\n * :ComponentName\n * Add description for your component\n */ \nexport const :ComponentName = (props) => {\n  :Declarations\n  return (\n    <div className=\":ComponentName\">\n    </div>\n  )\n}\n\n:ComponentName.propTypes = {\n}\n\nexport default :ComponentName;\n";
export declare const testComponent = "\nimport React from 'react';\nimport '@testing-library/jest-dom';\nimport { } from '@testing-library/react';\nimport :ComponentName from '.';\n\n/*\n * :ComponentName\n * Add description for your component\n */\ndescribe('<:ComponentName />', () => {\n\n  let component;\n\n  beforeEach(() => {\n    component = render(<:ComponentName/>);\n  })\n\n  // Start your test here\n})\n\n";
export declare const declarations: {
    useState: string;
    useEffect: string;
    useContext: string;
    useMemo: string;
    useRef: string;
    useReducer: string;
    useDispatch: string;
};
export declare const styleClass = "\n.:ComponentName {\n  /* Put your component styles here ;) */\n}\n";
export declare const imports: {
    styles: string;
    react: string;
    propTypes: string;
    useState: string;
    useEffect: string;
    useContext: string;
    useMemo: string;
    useRef: string;
    useReducer: string;
    useDispatch: string;
};
