import React from "react";

function AddTransaction({ newTransaction, updateInput, btnAddtransaction }) {
  return (
    <div className="add-transaction">
      <h4>Add Transactions</h4>
      <h5>Only Transactions between 01/01/2022 and 03/31/2022 will be added</h5>
      <label>Date : </label>
      <input
        type="date"
        name="date"
        value={newTransaction?.date ?? ""}
        onChange={(e) => updateInput(e)}
      ></input>
      <label>Amount :</label>
      <input
        type="number"
        name="amount"
        value={newTransaction?.amount ?? ""}
        onChange={(e) => updateInput(e)}
      ></input>
      <button id="add-txn" onClick={() => btnAddtransaction()}>
        Add Transaction
      </button>
    </div>
  );
}

export default AddTransaction;
