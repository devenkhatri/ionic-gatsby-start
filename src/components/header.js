import PropTypes from "prop-types"
import React from "react"
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'

const Header = ({ siteTitle }) => (
  <IonHeader>
    <IonToolbar color="primary">
      <IonTitle>
        {siteTitle}
      </IonTitle>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
