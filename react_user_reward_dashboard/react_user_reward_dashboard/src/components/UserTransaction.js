import React from "react";

export default function UserTransaction({ userTransactions }) {
  function calReward(price) {
    if (price >= 50 && price < 100) {
      return price - 50;
    } else if (price > 100) {
      return 2 * (price - 100) + 50;
    }
    return 0;
  }

  return (
    <>
      <h4>User Transactions</h4>
      {userTransactions.length > 0 ? (
        <table className="customers" style={{ width: "70%" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Rewards</th>
            </tr>
          </thead>
          <tbody>
            {userTransactions.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item["date"]}</td>
                  <td>{item["amount"]}</td>
                  <td>{calReward(item["amount"])}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No Transactions Found</div>
      )}
    </>
  );
}
