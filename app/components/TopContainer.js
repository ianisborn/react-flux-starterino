import React, { Component } from 'react';
import { Container } from 'flux/utils';
import TopStore from '../stores/TopStore';
import Navi from './Navi';
import TopContent from './TopContent';

class TopContainer extends Component {
  static getStores() {
    return [TopStore];
  }

  static calculateState() {
    return {
      data: TopStore.getState()
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <Navi title="Top"/>
        <TopContent
          title={this.state.data.title}
          subtitle={this.state.data.subtitle}
          text={this.state.data.text}
        />
      </>
    );
  }
}

export default Container.create(TopContainer);
