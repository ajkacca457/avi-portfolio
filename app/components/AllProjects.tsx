import React from 'react'
import { ProjectHoverEffect } from './ui/card-hover-effect';
import {projectsData} from '../data/projects';

const AllProjects = () => {
  return (
    <div className="w-[90vw] max-w-[1280px] mx-auto text-white">
      <ProjectHoverEffect items={projectsData} />
    </div>
  )
}

export default AllProjects