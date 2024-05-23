/* eslint-disable no-unused-vars */

import React from 'react'
import PropTypes from 'prop-types'
import SidebarNavigation from './SidebarNavigation'; 

const DashboardLayout = ({
  children
}) => {
  return (
    <div className="flex">
      <SidebarNavigation />
      <div className="flex-grow">
        {children}
      </div>
    </div>
  )
}
DashboardLayout.propTypes = {
  children: PropTypes.any
}

export default DashboardLayout
