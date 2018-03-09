import React from 'react'

export default class MyInput extends React.Component {
    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.onEnter(e)
        }
    }

    render() {
        return <input type="text" onKeyPress={this._handleKeyPress} />
    }
}