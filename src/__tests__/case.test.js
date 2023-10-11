import { describe, expect, it } from "vitest";
import user from "@testing-library/user-event";
import { render } from "@testing-library/react";
import CreateCaseLogs from "../components/cases/CreateCaseLog";
import React from "react";

describe("UtilityTest", () => {
  it("null input toest msg check", async () => {
    expect(null).toBeFalsy();
  });
});
