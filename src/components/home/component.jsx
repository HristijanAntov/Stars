import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { ping, fetchFeedbackRating } from '../../modules/stars/actions'
import PopupContainer from '../popup-container/component'
import Popup from '../popup/component'
import './styles.css';

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // this.props.fetchFeedbackRating()

  }
  render() {

    return (<div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1 className="App-title">Hundred5</h1>
      </header>
      <content>
        <PopupContainer>
          <Popup />
        </PopupContainer>
      </content>
    </div>);
  }
}




const mapStateToProps = state => ({
  rating: state.stars.rating
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ping,
  fetchFeedbackRating
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

