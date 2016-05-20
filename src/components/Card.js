// Let's make <Card text='Write the docs' /> draggable!
import React, { Component, PropTypes } from 'react'
import { DragSource } from 'react-dnd'
console.log(DragSource)

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    }
  }
}

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
}

class Card extends Component {
  render() {
    const { isDragging, connectDragSource, text } = this.props
    return connectDragSource(
      <div style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}
      </div>
    )
  }
}

Card.propTypes = propTypes

// Export the wrapped component:
export default DragSource('card', cardSource, collect)(Card)
