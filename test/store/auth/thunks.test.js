import { describe, expect, test, vi, beforeEach } from "vitest";
import { ckeckingAuthenticaction } from "../../../src/store/auth/thunks";
import { checkingCredentials } from "../../../src/store/auth";

describe("pruebas en AuthThunks", () => {
  test("debe de invocar el checklnAuthentication", async () => {
    const dispatch = vi.fn();

    beforeEach( () => vi.mockClear() );

    await ckeckingAuthenticaction()(dispatch);
    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });
});
