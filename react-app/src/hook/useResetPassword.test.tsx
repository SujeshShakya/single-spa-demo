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

  it("should return error when password is blank", () =>{
    //arrange
    const {result} = renderHook(()=> useResetPassword());
    //act
    result.current.validatePassword("")

    //assert
    expect(result.current.errorState).toBe(true);
    expect(result.current.errorMessage).toBe("This is required")
  })

  it("should return error when password is less than eight characters", () =>{
    //arrange
    const {result} = renderHook(()=> useResetPassword());
    //act
    result.current.validatePassword("333")
    //assert
    expect(result.current.errorState).toBe(true);
    expect(result.current.errorMessage).toBe("Password must be at least 8 characters")
  })

  it("should return error when password is from than eight characters without one number and two special characters", () =>{
    //arrange
    const {result} = renderHook(()=> useResetPassword());
    //act
    result.current.validatePassword("333990989")
    //assert
    expect(result.current.errorState).toBe(true);
    expect(result.current.errorMessage).toBe("Password must have  one number and two special characters")
  })

  it("should be successful if password is valid with more that eight character and one number two special characters", () =>{
    //arrange
    const {result} = renderHook(()=> useResetPassword());
    //act
    result.current.validatePassword("3339909##")
    //assert
    expect(result.current.errorState).toBe(false);
    expect(result.current.errorMessage).toBe("")
  })

  it("should be successful if password is valid with more that fifteen characters", () =>{
    const {result} = renderHook(()=> useResetPassword());
    result.current.validatePassword("3339909erewrwrewrewrwerwerewr")
    expect(result.current.errorState).toBe(false);
    expect(result.current.errorMessage).toBe("")
  })
});
