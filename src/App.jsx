import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import Landing from './pages/Landing'
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';

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
          path: 'projects',
          element: <Projects />
        },
        {
          path: 'experience',
          element: <Experiences />
        }
      ]
    }
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
