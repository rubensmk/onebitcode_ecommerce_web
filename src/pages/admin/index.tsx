import AdminComponent from '@/components/shared/AdminComponent'
import withAuthAdmin from '@/components/withAuthAdmin'
import React from 'react'

const Home: React.FC = () => {
  return <AdminComponent />
}

export default withAuthAdmin(Home)
