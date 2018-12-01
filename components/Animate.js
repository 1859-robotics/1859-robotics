import React from 'react'
import ReactDOM from "react-dom"
import { Transition } from 'react-transition-group'
import anime from 'animejs'


export default class Animate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeout: typeof(props.timeout) == "undefined" ? 0 : props.timeout,
      funcEnter: typeof(props.enter) == "function",
      funcExit: typeof(props.exit) == "function",
      scrollIn: false
    }
  }

  componentDidMount() {
    if(this.props.scroll) {
      const el = document.querySelector(this.props.scrollTarget)
      if( el ) {
        const positionFromTop = el.getBoundingClientRect().top
        if(positionFromTop - window.innerHeight <= 0 - this.props.offset) {
          this.setState({ scrollIn: true })
        }
        window.addEventListener("scroll", e => {
          const positionFromTop = el.getBoundingClientRect().top
          if(positionFromTop - window.innerHeight <= 0 - this.props.offset) {
            this.setState({ scrollIn: true })
          }
        })
      }
    }
  }

  render() {
    return (
      <Transition
        timeout={ this.state.timeout }
        in={ this.props.scroll ?
             this.state.scrollIn :
             typeof this.props.in == "undefined" ? true : this.props.in }
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
