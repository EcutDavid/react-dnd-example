import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
require('normalize.css/normalize.css')
require('styles/App.scss')

import React from 'react'
import Card from './Card'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Card text="Hello from DND"/>
      </div>
    )
  }
}

AppComponent.defaultProps = {
}

export default DragDropContext(HTML5Backend)(AppComponent)
