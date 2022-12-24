/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { IonApp, IonPage, IonContent, IonFooter, IonToolbar, IonTitle, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge, IonTab, IonHeader, IonRouterOutlet, IonItem, IonMenu } from '@ionic/react'
import { calendar, personCircle, map, informationCircle, home, list } from 'ionicons/icons';

import Header from "./header"

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import '../theme/variables.css';
import { Route, Redirect } from "react-router-dom";
import Menu from "./Menu";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const tabPage = (title) => {
    return (
      <IonTab tab={title}>
        <IonHeader translucent>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <h1>{title}</h1>
        </IonContent>
      </IonTab>
    );
  }

  const getPage = (title) => <IonPage>{title}</IonPage>;

  let Home = () => <div>Home</div>
  let Dash = () => <div>Dash</div>

  return (
    <IonApp>
      <Menu />
      <IonPage id="main">
        <Header siteTitle={data.site.siteMetadata.title} />        
        <IonContent className="ion-padding">          
          <main>{children}</main>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonTitle>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </IonTitle>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </IonApp>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
