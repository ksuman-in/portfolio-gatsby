import React from 'react';
import ReactHooksMain from '../../components/Projects/ReactHooks';
import Layout from '../../components/layout';
import LeftSideBar from '../../components/Projects/LeftSideBar';
import '../../styles/projects.scss';

export default function ReactHooks() {
  return (
    <Layout>
      <div className="projects-container">
        <LeftSideBar />
        <div className="mainproject" id="mainproject">
          <ReactHooksMain />
        </div>
      </div>
    </Layout>
  );
}
