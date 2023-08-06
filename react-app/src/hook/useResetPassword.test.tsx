/**
 * @jest-environment jsdom
 */
import { renderHook } from "@testing-library/react-hooks";
import { useResetPassword } from "./useResetPassword";

const mockReset = jest.fn();
const mockHandleSubmit = jest.fn();
const mockRegister = jest.fn();

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: () => ({
    reset: mockReset,
    handleSubmit: mockHandleSubmit,
    register: mockRegister,
  }),
}));

describe("useResetPassword", () => {
  it("should initialize", () => {
    const { result } = renderHook(() => useResetPassword());
    expect(result.current).toBeDefined();
    expect(result.current.errorState).toBeTruthy();
  });
});
