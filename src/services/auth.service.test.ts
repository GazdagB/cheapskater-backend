import { it, describe, expect } from "vitest";
import { validatePassword } from "./auth.service";

describe("authService", () => {
    it("returns an error for passwords shorter than 8 characters", () => {
        expect(validatePassword("A12.a")).toEqual(["be at least 8 characters"]);
    });

    it("returns an error when the password has no uppercase character", () => {
        expect(validatePassword("aaaaaaaa.")).toEqual(["contain an uppercase character"]);
    });

    it("returns an error when the password has no special character", () => {
        expect(validatePassword("Aaaaaaaa")).toEqual(["contain a special character"]);
    });

    it("returns both errors when the password is missing uppercase and special character", () => {
        expect(validatePassword("aaaaaaaa")).toEqual([
            "contain an uppercase character",
            "contain a special character",
        ]);
    });

    it("returns all failing validation messages in order", () => {
        expect(validatePassword("aaaaaaa")).toEqual([
            "be at least 8 characters",
            "contain an uppercase character",
            "contain a special character",
        ]);
    });

    it("returns no errors when every criteria is met", () => {
        expect(validatePassword("Password1234.")).toBe(false)
    });
});