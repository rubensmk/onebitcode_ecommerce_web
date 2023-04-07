import React from 'react'
import { Row, Col } from 'react-bootstrap'
import styles from '../../../../styles/AdminHeader.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignal,
  faUser,
  faGamepad,
  faCheckSquare,
  faLaptop,
  faTicketAlt,
  faDollarSign,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface AdminHeaderProps {
  name: string
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ name }) => {
  return (
    <Row className={styles.background}>
      <Col lg={6} xs gap-2>
        <Link href="/admin" className={styles.icon}>
          <FontAwesomeIcon
            icon={faSignal}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/users/list" className={styles.icon}>
          <FontAwesomeIcon
            icon={faUser}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/products/list" className={styles.icon}>
          <FontAwesomeIcon
            icon={faGamepad}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/categories/list" className={styles.icon}>
          <FontAwesomeIcon
            icon={faCheckSquare}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/system_requirements/list" className={styles.icon}>
          <FontAwesomeIcon
            icon={faLaptop}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="/admin/coupons/list" className={styles.icon}>
          <FontAwesomeIcon
            icon={faTicketAlt}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
        <Link href="#" className={styles.icon}>
          <FontAwesomeIcon
            icon={faDollarSign}
            color="var(--color-gray-light)"
            className="ml-3"
          />
        </Link>
      </Col>

      <Col lg={6} xs>
        <div className={styles.username}>
          <span className={styles.name}>{name}</span>
          <FontAwesomeIcon
            icon={faUserCircle}
            color="var(--color-gray-light)"
          />
        </div>
      </Col>
    </Row>
  )
}

export default AdminHeader
