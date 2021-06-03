import { Link } from 'gatsby';
import React, { Component } from 'react';
import './LeftSideBar.scss';

class LeftSideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    // eslint-disable-next-line no-undef
    if (typeof window !== `undefined`) {
      // eslint-disable-next-line no-undef
      this.setState({ location: window.location });
    }
  }
  render() {
    const menuList = [{ title: 'React Hooks', url: '/projects/react-hooks/' }];
    // console.log('window', this.state.location)
    return (
      <div className="leftsidebar" id="sidebar-wrapper">
        <div className="leftsidebar__header">
          <h2>My Projects</h2>
        </div>
        <div className="leftsidebar__body">
          <ul className="list">
            {/* <li className="list__item">Calendar</li> */}
            {menuList.map((list, index) => {
              const url = list.url;
              return (
                <li
                  className={`list__item ${
                    url ===
                      (this.state.location && this.state.location.pathname) &&
                    'active'
                  }`}
                  key={index}
                >
                  <Link to={url} rel="noreferrer">
                    {list.title}
                  </Link>
                </li>
              );
            })}
            <li className="list__item">
              <Link to={'/projects/'} rel="noreferrer">
                Making More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
