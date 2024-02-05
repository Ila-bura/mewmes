import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";

// Test to check if NavBar renders correctly
test("renders NavBar", () => {
    render(
        <Router>
            <NavBar />
        </Router>
    );

 // screen.debug();
 // Finding the Sign In link in the NavBar
 const signInLink = screen.getByRole("link", { name: "Sign In" });
 expect(signInLink).toBeInTheDocument();
});

test("Renders links to the user profile for logged in users", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );

    const profileAvatar = await screen.findByText("Banana");
    expect(profileAvatar).toBeInTheDocument();
});

// Test to check if links to user profile are rendered for logged in users
test("renders Sign in and Sign up buttons again on log out", async () => {
    render(
      <Router>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </Router>
    );

    const signOutLink = await screen.findByRole("link", { name: "Log out" });
    fireEvent.click(signOutLink);

    const signInLink = await screen.findByRole("link", { name: "Sign In" });
    const signUpLink = await screen.findByRole("link", { name: "Sign Up" });

    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
});