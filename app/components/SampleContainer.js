import React, { Component } from 'react';
import { Container } from 'flux/utils';
import SampleStore from '../stores/SampleStore';
import Navi from './Navi';
import SampleContent from './SampleContent';

class SampleContainer extends Component {
  static getStores() {
    return [SampleStore];
  }

  static calculateState() {
    return {
      data: SampleStore.getState()
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <Navi title="Sample"/>
        <SampleContent
          title={this.state.data.title}
          subtitle={this.state.data.subtitle}
          text={this.state.data.text}
        />
      </>
    );
  }
}

export default Container.create(SampleContainer);
