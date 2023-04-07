import React from 'react'
import styles from '../../../styles/SidebarMenu.module.css'
import Logo from '../Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignal,
  faUser,
  faGamepad,
  faCheckSquare,
  faLaptop,
  faTicketAlt,
  faDollarSign,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const SidebarMenu: React.FC = () => {
  return (
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/Admin">
          <FontAwesomeIcon
            icon={faSignal}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Painel Inicial</strong>

          <hr />
        </Link>

        <Link href="/Admin/Users/List">
          <FontAwesomeIcon
            icon={faUser}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Usuários</strong>
          <hr />
        </Link>

        <Link href="/Admin/Products/List">
          <FontAwesomeIcon
            icon={faGamepad}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Produtos</strong>
          <hr />
        </Link>

        <Link href="/Admin/Categories/List">
          <FontAwesomeIcon
            icon={faCheckSquare}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Categorias</strong>
          <hr />
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <FontAwesomeIcon
            icon={faLaptop}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Requisitos do Sistema</strong>
          <hr />
        </Link>

        <Link href="/Admin/Coupons/List">
          <FontAwesomeIcon
            icon={faTicketAlt}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Cupons</strong>
          <hr />
        </Link>

        <Link href="/Admin/#">
          <FontAwesomeIcon
            icon={faDollarSign}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Financeiro</strong>
          <hr />
        </Link>

        <Link href="/Admin/#">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            color="var(--color-gray-light)"
            className="mr-3"
          />
          <strong className={styles['list-item']}>Sair</strong>
          <hr />
        </Link>
      </div>
    </div>
  )
}

export default SidebarMenu
