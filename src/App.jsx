import { useState } from 'react'
import HomeLayout from './components/HomeLayout'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects';

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
          element: <Experience />
        }
      ]
    }
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
