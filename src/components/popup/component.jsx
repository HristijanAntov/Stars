import React from 'react'
import CrossIcon from '../../icons/cross.svg'
import Star from '../star/component'
import './styles.css';

const times = n => Array.from(new Array(n), (_, i) => i)

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: -1
    }
  }

  onStarHover(starWeight) {
    if (!this.props.submitting) {
      this.setState({ rating: starWeight })
    }
  }

  onStarContainerMouseLeave() {
    if (!this.props.submitting) {
      this.setState({ rating: -1 })
    }
  }

  onStarClicked(starWeight) {
    if (!this.props.submitting) {
      this.setState({ rating: starWeight })
      this.props.submitFeedbackRating(starWeight)
    }
  }

  onCloseButtonClicked() {
    if (!this.props.submitting) {
      this.props.submitClosedPreference()
    }
  }

  render() {
    const { rating } = this.state

    return (
      <div className="popup">
        <h3 className="header">How likely are you to recommend <b>Hundred5</b> to a friend or colleague?
        <img className="close-icon" src={CrossIcon} onClick={() => this.onCloseButtonClicked()} />
        </h3>
        <div className="popup-body">
          <div className="star-wrapper" onMouseLeave={() => this.onStarContainerMouseLeave()}>
            {times(11).map(starWeight =>
              <Star
                key={starWeight}
                starWeight={starWeight}
                onStarHover={() => this.onStarHover(starWeight)}
                isActive={starWeight <= rating}
                onStarClicked={() => this.onStarClicked(starWeight)}
              />)
            }
          </div>
        </div>
      </div>);
  }
}




export default Popup

