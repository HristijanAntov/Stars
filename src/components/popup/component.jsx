import React from 'react'
import CrossIcon from '../../icons/cross.svg'
import Star from '../star/component'
import './styles.css';

const times = n => Array.from(new Array(n), (_, i) => i)

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      virtualRating: -1
    }
  }

  onStarHover(starWeight) {
    this.setState({ virtualRating: starWeight })
  }
  onStarContainerMouseLeave() {
    this.setState({
      virtualRating: -1
    })
  }
  render() {
    const { virtualRating } = this.state
    return (
      <div className="popup">
        <h3 className="header">How likely are you to recommend <b>Hundred5</b> to a friend or colleague?
        <img className="close-icon" src={CrossIcon} />
        </h3>
        <div className="popup-body">
          <div className="star-wrapper" onMouseLeave={() => this.onStarContainerMouseLeave()}>
          {times(11).map(starWeight =>
            <Star
              starWeight={starWeight}
              key={starWeight}
              onStarHover={() => this.onStarHover(starWeight)}
              isActive={starWeight <= virtualRating}
            />)
          }
          </div>
        </div>
      </div>);
  }
}




export default Popup

