import React, { Component } from "react";
import Header from "./Header";
import Head from 'next/head';
import { Container } from 'semantic-ui-react';

class Layout extends Component {
  render() {
    return (
      <Container>
          <Head>
            <link
                rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"
            />
          </Head>
        <Header></Header>
        {this.props.children}
        
      </Container>
    );
  }
}
export default Layout;
