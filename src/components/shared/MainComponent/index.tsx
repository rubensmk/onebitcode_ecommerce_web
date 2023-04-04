import React from 'react'
import StorefrontHeader from '../Header/StorefrontHeader'
import StorefrontFooter from '../Footer/StorefrontFooter'

const MainComponent: React.FC<any> = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <StorefrontHeader />

      <div className="container flex-fill">{children}</div>

      <StorefrontFooter />
    </div>
  )
}

export default MainComponent
