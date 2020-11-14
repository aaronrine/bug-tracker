import React from "react";

import Project from "./Project/Project"

import "./ProjectsList"

function ProjectsList() {
    return (
        <div className="ProjectsList" data-testid="ProjectsList">
            <Project />
        </div>
    )
}

export default ProjectsList;