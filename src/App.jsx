import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import Landing from './pages/Landing'
import Resume from './pages/Resume';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Experinces from './components/Experinces';
import AboutMe from './components/AboutMe';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Landing />
        },
        {
          path: 'work',
          element: <Work />
        },
        {
          path: 'resume',
          element: <Resume />,
          children: [
            {
              index: true,
              element: <Experinces />
            },
            {
              path:'about',
              element: <AboutMe />
            }
          ]
        },
        {
          path: 'contact',
          element: <Contact />
        }
      ]
    }
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
