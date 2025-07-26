import { describe } from "node:test";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from 'vitest';

import SubcategoryList from "./SubcategoryList";
import '@testing-library/jest-dom';



describe("SubcategoryList", () => {
  const mockSubcategories = [
    { id: 1, name: "Postpartum", icon: "/fake/icon1.png" },
    { id: 2, name: "Baby Care", icon: "/fake/icon2.png" },
  ];

  test("renders subcategory names", () => {
    render(<SubcategoryList subcategories={mockSubcategories} />);
    expect(screen.getByText("Postpartum")).toBeInTheDocument();
    expect(screen.getByText("Baby Care")).toBeInTheDocument();
  });

  test("calls onSelect when a subcategory is clicked", async () => {
    const mockSelect = vi.fn();
    render(
      <SubcategoryList
        subcategories={mockSubcategories}
        onSelect={mockSelect}
      />
    );
    const postpartumButton = screen.getByText("Postpartum");
    await userEvent.click(postpartumButton);
    expect(mockSelect).toHaveBeenCalledWith(1);
  });
});
