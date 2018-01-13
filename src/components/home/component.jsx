import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { ping, fetchFeedbackRating, fetchClosedPreference, submitFeedbackRating } from '../../modules/stars/actions'
import PopupContainer from '../popup-container/component'
import Popup from '../popup/component'
import './styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchFeedbackRating()
    this.props.fetchClosedPreference()
  }

  render() {
    const { rating, isFeedbackClosed, submitting } = this.props
    const shouldRenderPopup = [rating, isFeedbackClosed].some(it => it === undefined)
      ? false // In this case we didn't receive the fetches yet
      : !isFeedbackClosed && rating === -1 // -1 Rating is just a mark to infer that the user never rated




    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Hundred5</h1>
      </header>
      <content>
        {shouldRenderPopup &&
          <PopupContainer>
            <Popup
              submitting={submitting}
              submitFeedbackRating={starWeight => this.props.submitFeedbackRating(starWeight)}
            />
          </PopupContainer>
        }
      </content>
    </div>);
  }
}




const mapStateToProps = ({ stars: { rating, isFeedbackClosed, submitting } }) => ({
  rating,
  isFeedbackClosed,
  submitting,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ping,
  fetchFeedbackRating,
  fetchClosedPreference,
  submitFeedbackRating,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

