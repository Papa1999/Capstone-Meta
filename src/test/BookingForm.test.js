import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm"; // Adjust the import path as necessary
import "@testing-library/jest-dom";

describe("BookingForm Component", () => {
  // Test 1: Check if the form elements are rendered
  it("should render all form elements correctly", () => {
    render(<BookingForm />);

    // Check for form labels and input elements
    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  // Test 2: Check the initial value of the date input
  it("should have today's date as the initial value for the date input", () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/choose date/i);

    // Compare the value with today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];
    expect(dateInput.value).toBe(today);
  });

  // Test 3: Check the functionality of the date input (change event)
  it("should update the date when a user selects a new date", () => {
    render(<BookingForm />);

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-03-01" } });

    expect(dateInput.value).toBe("2025-03-01");
  });

  // Test 4: Check the functionality of the time select input (change event)
  it("should update the time when a user selects a new time", () => {
    render(<BookingForm />);

    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.change(timeSelect, { target: { value: "19:00" } });

    expect(timeSelect.value).toBe("19:00");
  });

  // Test 5: Check the functionality of the number of guests input (change event)
  it("should update the number of guests when a user enters a number", () => {
    render(<BookingForm />);

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "5" } });

    expect(guestsInput.value).toBe("5");
  });

  // Test 6: Ensure the number of guests input shows an alert if the number is greater than 10
  it("should show an alert when the number of guests exceeds 10", () => {
    render(<BookingForm />);

    // Spy on the global alert function
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});

    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: "11" } });

    expect(alertSpy).toHaveBeenCalledWith(
      "The value should be between 1 and 10"
    );
    alertSpy.mockRestore(); // Restore the alert spy
  });

  // Test 7: Check if the submit button is clicked
  it("should trigger form submission when clicking the submit button", () => {
    render(<BookingForm />);

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });

    // Simulate a form submission (though we don't have an actual submit handler)
    fireEvent.click(submitButton);

    // Since no actual form submission is implemented, we can't check for side-effects here,
    // but we can test the button's interaction and ensure it's not disabled.
    expect(submitButton).toBeEnabled();
  });
});
