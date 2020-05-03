import * as React from 'react'
import * as ReactDom from 'react-dom'

//import Button from './button'
import Icon from './icon/icon'

ReactDom.render(
    <div>
        <Icon name="wechat" />,
        <Icon name="qq" />,
    </div>,
    document.getElementById('root')
)
