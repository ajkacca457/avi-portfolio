import { useState } from 'react'
import HomeLayout from './components/HomeLayout'
import About from './components/About'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'projects',
          element: <div>Projects</div>
        },
        {
          path: 'experience',
          element: <div>Experience</div>
        }
      ]
    }
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
