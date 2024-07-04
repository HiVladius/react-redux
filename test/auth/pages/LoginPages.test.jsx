import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginPages } from "../../../src/auth/pages/LoginPages";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../../../src/store/auth";
import { MemoryRouter } from "react-router";
import { notAuthenticatedState } from "../../../src/store/auth";
import { startGoogleSignIn } from "../../../src/store/auth/thunks";


const mockstartGoogleSignIn = vi.fn();

vi.mock("../../../src/store/auth/thunks", () => ({
    startGoogleSignIn: vi.fn(),
    }));

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
  preloadedState: {
    auth: notAuthenticatedState,
  },
});

describe(" Pruebas de <LoginPages />", () => {
    // test("debe de mostrar un componente correctamente", () => {
    //   render(
    //     <Provider store={store}>
    //       <MemoryRouter>
    //         <LoginPages />
    //       </MemoryRouter>
    //     </Provider>
    //   );
    //   expect(screen.queryAllByAltText("Login✍️")).not.toBeNull();
    // });

  test("boton de google debe de llamar el startGoogleSignIn", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPages />
        </MemoryRouter>
      </Provider>
    );

    const button = screen.getByTestId("google-button");
    fireEvent.click(button);

    expect(startGoogleSignIn).toHaveBeenCalledOnce();
  });
});
