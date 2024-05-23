/* eslint-disable no-unused-vars */

import React from 'react'
import PropTypes from 'prop-types'
import SidebarNavigation from './SidebarNavigation';
import HeaderNavigation from './HeaderNavigation';






const DashboardLayout = ({
  children
}) => {
  return (
    <div className="flex bg-[#f1f1f1] dark:bg-[#1d1d1d] dark:text-white">
      <SidebarNavigation />
      <div className="flex-grow">
        <HeaderNavigation />
        {children}
      </div>
    </div>
  )
}
DashboardLayout.propTypes = {
  children: PropTypes.any
}

export default DashboardLayout
