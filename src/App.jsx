import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import About from './pages/About'
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
          element: <About />
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
