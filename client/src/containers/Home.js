import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Monitor from '../components/monitor/monitor'
import { connect } from 'react-redux'
import { productsFatch } from '../actions/index.js'

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productsFatch();
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Monitor products={ this.props.products } />
        <Footer />
      </div>
    );
  }
}

// state in the store
function mapStateToProps(state) {
  return { products:  state.products};
}
// หรือเขียนแบบ destructure มันจะสั้นลง
// function mapStateToProps(products) {
//   return { products };
// }

export default connect(mapStateToProps, { productsFatch })(Home);
