import React, { Component } from 'react';
import Layout from '../../components/layout';
import LeftSideBar from '../../components/Projects/LeftSideBar';
import ProjectMain from '../../components/Projects/ProjectMain';
import '../../styles/projects.scss';

export default class projects extends Component {
  render() {
    return (
      <Layout>
        <div className="projects-container">
          <LeftSideBar />
          <div className="mainproject" id="mainproject">
            <ProjectMain />
          </div>
        </div>
      </Layout>
    );
  }
}
