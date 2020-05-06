import * as React from "react";
import * as ReactDom from "react-dom";

//import Button from './button'
import Icon from "./icon/icon";

const fn: React.MouseEventHandler = (e) => {
    console.log(111);
    console.log(e.target);
};
const mouse: React.MouseEventHandler = (e) => {
    console.log(111);
    console.log(e.target);
};

ReactDom.render(
    <div>
        <Icon name="wechat" className={'lll'} onClick={fn}/>
        <Icon name="qq" onClick={fn} onMouseEnter={mouse}/>
    </div>,
    document.getElementById("root")
);
