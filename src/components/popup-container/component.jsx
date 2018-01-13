import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const popupContainer = document.getElementById('popup-container')

class PopupContainer extends React.Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div');
    this.el.classList.add('popup-container')
  }

  componentDidMount() {
    popupContainer.appendChild(this.el);
  }

  componentWillUnmount() {
    popupContainer.removeChild(this.el)
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default PopupContainer

