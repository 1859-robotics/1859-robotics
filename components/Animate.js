import React from 'react'
import { Transition } from 'react-transition-group'
import anime from 'animejs'


export default class Animate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeout: typeof(props.timeout) == "undefined" ? 0 : props.timeout,
      funcEnter: typeof(props.enter) == "function",
      funcExit: typeof(props.exit) == "function",
    }
  }

  render() {
    return (
      <Transition
        timeout={ this.state.timeout }
        in={ typeof this.props.in == "undefined" ? true : this.props.in }
        appear={ true }
        onEntered={ e => {
          anime(!this.state.funcEnter ? {
            targets: e,
            ...this.props.enter
          } : this.props.enter(e))} }
        onExit={ e => {
          anime(!this.state.funcExit ? {
            targets: e,
            ...this.props.exit
          } : this.props.exit(e))} }>
        { this.props.children }
      </Transition>
    )
  }
}
