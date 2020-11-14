import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe("App", () => {
  it("exists", () => {
    render(<App />);
    const app = screen.getByTestId(/^App$/);
    expect(app).toBeInTheDocument();
  });
  it("has a login", () => {
    render(<App />);
    const login = screen.getByTestId(/^Login$/);
    expect(login).toBeInTheDocument();
  });
  it("has projects", () => {
    render(<App />);
    const projects = screen.getByTestId(/^ProjectsList$/);
    expect(projects).toBeInTheDocument();
  })
});