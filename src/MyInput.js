import React from 'react'

export default class MyInput extends React.Component {
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onEnter()
        }
    }

    render() {
        return <input type="text" onKeyPress={this._handleKeyPress} />
    }
}