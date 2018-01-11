import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { ping } from '../../modules/stars/actions'
import './styles.css';

const Home = (props) =>
  <div className="App">
    <header className="App-header">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1 className="App-title">Please Rate Us</h1>
    </header>
    <content>
      
    </content>
  </div>;



const mapStateToProps = state => ({
  rating: state.stars.rating
});

const mapDispatchToProps = dispatch => bindActionCreators({
  ping
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

