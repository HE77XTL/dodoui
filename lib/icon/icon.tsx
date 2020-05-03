import * as React from "react";
//import "./importAllIcons"

import "../../icons/wechat.svg";

//import '../../icons/qq.svg'

interface iconProps {
    name: string
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
    return (
        <span>
            <svg>
                <use xlinkHref='#wechat'/>
            </svg>
        </span>
    );
};

export default Icon;



