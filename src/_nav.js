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
  
  // {
  //   component: CNavGroup,
  //   name: 'Registration',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
   
  //     {
  //       component: CNavItem,
  //       name: 'Users Register',
  //       to: '/users/register',
       
  //     },
   
  //     {
  //       component: CNavItem,
  //       name: 'Activity Center',
  //       to: '/gym/register',
       
  //     },
  //     // {
  //     //   component: CNavItem,
  //     //   name: 'FAQs Form',
  //     //   to: '/faq',
       
  //     // },
  //     // {
  //     //   component: CNavItem,
  //     //   name: 'Membership Plan Form',
  //     //   to: '/membershipPlanForm',
       
  //     // }
  //   ],
  // },
  {
    component: CNavItem,
    name: 'Roles',
    to: '/RoleList',
    // icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    icon:<i className='fa fa-tasks nav-icon'></i>
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Vendors',
    to: '/lists/allvendorlist',
    // icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    icon:<i className='fa fa-users nav-icon'></i>
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Plans',
    to: '/PlanList',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon:<i className="fa fa-id-card nav-icon"></i>
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Facilities',
    to: '/FacilitiesList',
    // icon: <CIcon icon={cilLan} customClassName="nav-icon" />,
    icon:<i className="fa fa-bicycle nav-icon"></i>
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Refunds',
    to: '/RefundPolices',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon:<i className='fa fa-rupee nav-icon'></i>
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    name: 'Career',
    to: '/CareerList',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon:<i className='	fa fa-briefcase nav-icon'></i>
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  
  {
    component: CNavItem,
    name: 'Queries',
    to: '/ContactusList',
    icon: <CIcon icon={cilAddressBook} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  // {
  //   component: CNavGroup,
  //   name: 'Lists',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
   
  //     {
  //       component: CNavItem,
  //       name: 'UsersList',
  //       to: '/lists/userslist',
       
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'All  list',
  //       to: '/lists/allgymlist',
       
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'All FAQ list',
  //       to: '/faqlist',
       
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'All Plan list',
  //       to: '/planList',
       
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'All role list',
  //       to: '/roleList',
       
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'All Contactus list',
  //       to: '/contactuslist',
       
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'All Career list',
  //       to: '/careerlist',
       
  //     },
  //     {
  //       component:CNavItem,
  //       name:"All Facilities list",
  //       to :'/facilitiesList'
  //     },
  //     {
  //       component:CNavItem,
  //       name:"All refund list",
  //       to:"/refundPolices"
  //     }
  //   ],
  // },
  {
    component: CNavItem,
    name: 'FAQS',
    to: '/faqlist',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    icon: <i className='fa fa-question nav-icon'></i>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
 
  
  
  
  

 
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
