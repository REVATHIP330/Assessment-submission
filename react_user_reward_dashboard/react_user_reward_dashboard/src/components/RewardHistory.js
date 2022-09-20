import React from "react";

export default function RewardHistory({ userRewards }) {
  return (
    <table className="customers">
      <thead>
        <tr>
          <th>Month</th>
          <th>Rewards</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>First Month</td>
          <td>{userRewards[1]["rewards"]}</td>
        </tr>
        <tr>
          <td>Second Month</td>
          <td>{userRewards[2]["rewards"]}</td>
        </tr>
        <tr>
          <td>Third Month</td>
          <td>{userRewards[3]["rewards"]}</td>
        </tr>
        <tr>
          <td>
            <b>Total Reward</b>
          </td>
          <td style={{ color: "#458dff" }}>
            <b>
              {userRewards[1]["rewards"] +
                userRewards[2]["rewards"] +
                userRewards[3]["rewards"]}
            </b>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
