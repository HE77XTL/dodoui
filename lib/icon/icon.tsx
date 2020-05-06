import * as React from "react";
import "./importAllIcons";
import "./icon.scss";
import classnames from "../helpers/classnames";

// 静态引入可以 tree-shaking
//import "../../icons/wechat.svg";
//import '../../icons/qq.svg'

interface iconProps extends React.SVGAttributes<SVGElement> {
    name: string
}

const Icon: React.FunctionComponent<iconProps> = ({name, className, ...resetProps}) => {
    return (
        <span>
            <svg className={classnames("dodo-icon", className)}
                 {...resetProps}>
                <use xlinkHref={`#${name}`}/>
            </svg>
        </span>
    );
};

export default Icon;



