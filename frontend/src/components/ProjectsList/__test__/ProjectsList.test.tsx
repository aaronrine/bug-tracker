import React from "react";
import { render, screen } from '@testing-library/react';
import ProjectsList from '../ProjectsList';
import { O_TRUNC } from "constants";

describe("ProjectsList", () => {
    it("shows a project if one is present", () => {
        const list = [{},{}];
        render(<ProjectsList />);
        const project = screen.getByTestId("Project");
        expect(project).toBeInTheDocument();
    });
    // it("shows nothing if there are no projects present", () => {
    //     render(<ProjectsList />);
    //     const project = screen.getByTestId("Project");
    //     expect(project).
    // })
})