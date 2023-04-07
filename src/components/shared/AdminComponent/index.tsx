import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AdminHeader from '../Header/AdminHeader'
import AdminFooter from '../Footer/AdminFooter'
import SidebarMenu from '../SidebarMenu'

const AdminComponent: React.FC = ({ children }: any) => {
  return (
    <Row className="mr-lg-4">
      <Col lg={3}>
        <SidebarMenu />
      </Col>

      <Col lg={9}>
        <div className="d-flex flex-column sticky-footer-wrapper container">
          <AdminHeader name="Nome do User" />
          <div className="flex-fill text-center">{children}</div>
        </div>
        <AdminFooter />
      </Col>
    </Row>
  )
}

export default AdminComponent
