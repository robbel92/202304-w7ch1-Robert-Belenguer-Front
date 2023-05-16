import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const loginButtonText = "LOGIN";
  describe("When rendered", () => {
    const actionOnSubmit = vi.fn();

    test("Then it should show a 'Username' & 'Password' inputs", () => {
      const usernameLabel = "Username:";
      const passwordLabel = "Password:";

      render(<LoginForm actionOnSubmit={actionOnSubmit} />);

      const usernameInput = screen.getByLabelText(usernameLabel);
      const passwordInput = screen.getByLabelText(passwordLabel);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a 'Login' button", () => {
      render(<LoginForm actionOnSubmit={actionOnSubmit} />);

      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When is rendered and the form is not complete  ", () => {
    test("Then the button appears in disable", () => {
      const actionOnSubmitMock = vi.fn();
      render(<LoginForm actionOnSubmit={actionOnSubmitMock} />);

      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });

      expect(loginButton).toBeDisabled();
    });
  });

  describe("When is rendered and the user complets form  ", () => {
    test("Then the button appears enabled", () => {
      const actionOnSubmitMock = vi.fn();
      render(<LoginForm actionOnSubmit={actionOnSubmitMock} />);

      const inputUserName = screen.getByLabelText("Username:");
      const inputPasswordName = screen.getByLabelText("Password:");

      userEvent.type(inputUserName, "Hola");
      userEvent.type(inputPasswordName, "Hola");

      const loginButton = screen.getByRole("button", {
        name: loginButtonText,
      });

      screen.debug();

      expect(loginButton).toBeEnabled();
    });
  });
});
