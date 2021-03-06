import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import React from 'react';
import * as Actions from '../actions';

import AtomicLab from '../components/atomic-lab/atomic-lab';
import Header from '../components/header/header';
import SideMenu from '../components/sidemenu/sidemenu';
import MainArea from '../components/mainarea/mainarea';
import AddBtn from '../components/addbtn/addbtn';
import EditDialog from '../components/edit-dialog/edit-dialog';

class App extends React.Component {

  componentDidMount() {
    axios.get('./config.json').then(item => {
      this.props.setConfig(item.data);
      this.setComponents();
    });
  }

  setComponents() {
    const config = this.props.config;
    const hash = location.hash;
    axios.get(config.local_file_path).then(item => {
      this.props.setComponents(item.data.components);
      if(item.data.components.length >= 1) {
        let itemId = item.data.components[0].itemId;
        this.props.components.forEach((item, i) => {
          if (`#${item.name}` === hash) {
            itemId = item.itemId;
          }
        });
        this.props.selectItem(itemId);
      }
    });
  }

  render() {
    const props = this.props;
    return (
      <AtomicLab {...props}
        header={<Header {...props} />} 
        sideMenu={<SideMenu {...props} />}
        mainArea={
          <MainArea {...props}
            addBtn={<AddBtn {...props} />} 
            editDialog={<EditDialog {...props} />} 
          />
        } 
      />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
