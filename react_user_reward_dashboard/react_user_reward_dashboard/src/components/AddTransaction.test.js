import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AddTransaction from "./AddTransaction";

test("add transaction", () => {
  render(<AddTransaction />);
  //select the elements you want to interact with
  //const addTxn = screen.getByTestId("add-txn");

  //interact with those elements
  //fireEvent.click(addTxn);

  //assert the expected result
  //expect(addTxn).toHaveTextContent("Add Transaction");
});
