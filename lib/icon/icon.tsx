import * as React from "react";
import "./importAllIcons"
import "./icon.scss"

// 静态引入可以 tree-shaking
//import "../../icons/wechat.svg";
//import '../../icons/qq.svg'

interface iconProps {
    name: string
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
    return (
        <span>
            <svg className='dodo-icon '>
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    );
};

export default Icon;



