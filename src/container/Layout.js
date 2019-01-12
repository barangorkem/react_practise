import React from 'react';
import Header from './Header';

const Layout = props => ({
    render() {
      return (
        <div className="App">
          <Header isLogin={this.props.isLogin} />
          <main>{props.children}</main>
        </div>
      );
    }
  });

export default Layout;
