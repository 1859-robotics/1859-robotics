import React from 'react'
import { Transition } from 'react-transition-group'
import anime from 'animejs'


export default class Animate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeout: typeof(props.timeout) == "undefined" ? 0 : props.timeout,
      func: typeof(props.anime) == "function",
      in: true
    }
  }

  render() {
    return (
      <Transition
        timeout={ this.state.timeout }
        in={ this.state.in }
        appear={ true }
        onEntered={ e => {
          anime(!this.state.func ? {
            targets: e,
            ...this.props.anime
          } : this.props.anime(e))} }>
        { this.props.children }
      </Transition>
    )
  }
}
