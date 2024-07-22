import { useState } from 'react'
import HomeLayout from './layouts/HomeLayout'
import Landing from './pages/Landing'
import Resume from './pages/Resume';
import Work from './pages/Work';

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
          element: <Resume />
        }
      ]
    }
  ]
);

function App() {
  return <RouterProvider router={router} />;
}

export default App
