import React from 'react'



const MembershipPlanForm=React.lazy(()=>import('./views/pages/forms/MembershipPlanForm'))
const FaqsList = React.lazy(() => import('./views/pages/lists/FaqsList'))
const Faqsform = React.lazy(() => import('./views/pages/forms/Faqsform'))
const Register = React.lazy(() => import('./views/pages/forms/Register'))
const GymRegister = React.lazy(() => import('./views/pages/forms/GymRegister'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
const CenterManagement=React.lazy(()=>import('./components/CenterManagement'))
const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
const ShowUserLists=React.lazy(()=>import('./views/pages/lists/ShowUserLists'))
const GymList=React.lazy(()=>import('./views/pages/lists/GymList'))
const PlanList=React.lazy(()=>import('./views/pages/lists/PlanList'))
const RoleList=React.lazy(()=>import('./views/pages/lists/RoleList'))
const ContactusList=React.lazy(()=>import('./views/pages/lists/ContactusList'))
const CareerList=React.lazy(()=>import('./views/pages/lists/CareerList'))
const Gymdetails=React.lazy(()=>import('./views/pages/forms/GymDetails'))
const FacilitiesList=React.lazy(()=>import('./views/pages/lists/FacilitiesList'))
// const RefundPolices=React.lazy(()=>import('./view/pages/'))
const RefundPolices=React.lazy(()=>import('./views/pages/lists/RefundPolices'))
const TeamList=React.lazy(()=>import('./views/pages/lists/TeamList'))
const VoucherList=React.lazy(()=>import('./views/pages/lists/VoucherList'))
const FeedbackList=React.lazy(()=>import('./views/pages/lists/FeedbackList'))
const routes = [
  {path:'/refundPolices',name:"Refund Polices",element:RefundPolices},
  {path:'/facilitiesList',name:"facilities list",element:FacilitiesList},
  {path:'/gymdetails',name:"gymdetails",element:Gymdetails},
  {path:'/careerlist',name:"Career list",element:CareerList},
  {path:'/center-management', name:'Center Management', element:CenterManagement},
  {path:'/contactuslist',name:"Contactus list",element:ContactusList},
  {path:'/roleList',name:"Role list",element:RoleList},
  {path:'/planList',name:"Plan list",element:PlanList},
  {path:'/membershipPlanForm',name:"Membership Plan",element:MembershipPlanForm},
  {path:'/faqlist',name:"FAQ List",element:FaqsList},
  {path:'/faq',name:"FAQ Question",element:Faqsform},
  {path:'/lists/allvendorlist',name:"All Gym List",element:GymList},
  {path:'/gym/register',name:"Gym Registration  Form",element:GymRegister},
  {path:'/lists/userslist',name:"userlist",element:ShowUserLists},
  {path:'/users/register',name:"register",element:Register},
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  {path:'/team',name:"Team",element:TeamList},
{path:'/voucher',name:"VoucherList",element:VoucherList},
{path:'/feedback',name:"Feedback",element:FeedbackList},
]

export default routes
