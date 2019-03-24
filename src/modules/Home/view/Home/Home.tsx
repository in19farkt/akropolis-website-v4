import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';
import { HomeIntro, News, Partners, Products, WhatYouCanBuild, CurrentEvents } from 'modules/sections';
import { AnchorName } from 'shared/types/common';

import { StylesProps, provideStyles } from './Home.style';

function Home(props: RouteComponentProps & StylesProps) {
  const { location, history } = props;

  const handleSelectCurrentEvent = React.useCallback(() => {
    const eventsAnchor: AnchorName = 'events';
    history.push({ pathname: location.pathname, hash: eventsAnchor });
  }, []);

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Intro>
        <HomeIntro />
      </Layout.Intro>
      <Products />
      <WhatYouCanBuild />
      <Partners />
      <News />
      <CurrentEvents onChangeSelectedEvent={handleSelectCurrentEvent} />
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Home);
