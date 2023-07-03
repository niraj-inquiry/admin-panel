import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilInstitution,
  cilAddressBook,
  cilApplications,
  cilPeople,
  cilLan,
  cilUser
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    // icon: <CIcon icon={cilInstitution} customClassName="nav-icon" />,
    icon:<i className='fa fa-home nav-icon'></i>
   
  },
  {
    component: CNavItem,
    name: 'Team',
    to: '/team',
    // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    icon:<i className='fa fa-user nav-icon'></i>
   
  },
  {
    component: CNavItem,
    name: 'Voucher',
    to: '/voucher',
    // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    icon:<i className='fa fa-user nav-icon'></i>
   
  },
  {
    component: CNavItem,
    name: 'Feedback',
    to: '/feedback',
    // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    icon:<i className='fa fa-user nav-icon'></i>
   
  },
  {
    component: CNavItem,
    name: 'Users',
    to: '/lists/userslist',
    // icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    icon:<i className='fa fa-user nav-icon'></i>
   
  },
  {
    component: CNavItem,
    name: 'Roles',
    to: '/RoleList',
    // icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    icon:<i className='fa fa-tasks nav-icon'></i>
    
  },
  {
    component: CNavItem,
    name: 'Vendors',
    to: '/lists/allvendorlist',
    // icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    icon:<i className='fa fa-users nav-icon'></i>
   
  },
  {
    component: CNavItem,
    name: 'Plans',
    to: '/PlanList',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon:<i className="fa fa-id-card nav-icon"></i>
   
  },
  {
    component: CNavItem,
    name: 'Facilities',
    to: '/FacilitiesList',
    // icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
    icon:<i className="fa fa-bicycle nav-icon"></i>
    
  },
  {
    component: CNavItem,
    name: 'Refunds',
    to: '/RefundPolices',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon:<i className='fa fa-rupee nav-icon'></i>
    
  },
  {
    component: CNavItem,
    name: 'Career',
    to: '/CareerList',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon:<i className='	fa fa-briefcase nav-icon'></i>
   
  },
  
  {
    component: CNavItem,
    name: 'Queries',
    to: '/ContactusList',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
   
  },
 
  {
    component: CNavItem,
    name: 'FAQS',
    to: '/faqlist',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon: <i className='fa fa-question nav-icon'></i>,
   
  },
  {
    component: CNavItem,
    name: 'Center Man',
    to: '/center-management',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon: <i className='fa fa-align-center nav-icon'></i>,
   
  },
]

export default _nav
