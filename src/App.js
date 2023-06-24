import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import Login from './views/pages/login/Login'
import ShowUserLists from './views/pages/lists/ShowUserLists';
import "font-awesome/css/font-awesome.min.css";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
// const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/forms/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
         
          <Route path="*" name="Home" element={<DefaultLayout />} /> 
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App

// import React, { Component, Suspense } from 'react'
// import { HashRouter, Route, Routes,BrowserRouter } from 'react-router-dom'
// import DefaultLayout from './layout/DefaultLayout'
// import './scss/style.scss'
// import Login from './views/pages/login/Login'
// import Register from './views/pages/register/Register'
// // const loading = (
// //   <div className="pt-3 text-center">
// //     <div className="sk-spinner sk-spinner-pulse"></div>
// //   </div>
// // )

// // Containers
// // const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// // // Pages
// // const Login = React.lazy(() => import('./views/pages/login/Login'))
// // const Register = React.lazy(() => import('./views/pages/register/Register'))
// // const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// // const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//       <BrowserRouter>
//       <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path='/default' element={<DefaultLayout/>}/>
//       </Routes>
//       </BrowserRouter>
//       </div>
     
//     )
//   }
// }

// export default App
