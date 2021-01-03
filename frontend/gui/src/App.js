import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import BaseRouter from './routes';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CoustomLayout from './containers/Layout'

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }
  render(){
  return (
    <div>
      <Router>
        <CoustomLayout {...this.props}>
          <BaseRouter />
        </CoustomLayout>
      </Router>     

    </div>
  );
}
}
const mapStateToProps=state=>{
  return{
      isAuthenticate:state.token!==null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
