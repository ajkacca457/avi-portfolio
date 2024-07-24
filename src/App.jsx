import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import Landing from './pages/Landing'
import Resume from './pages/Resume';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Experinces from './components/Experinces';

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
              path:'skills',
              element: "<h1>Skills</h1>"
            },
            {
              path:'about',
              element: "<h1>About</h1>"
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
