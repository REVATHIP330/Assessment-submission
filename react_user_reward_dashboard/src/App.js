import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import RewardHistory from "./components/RewardHistory";
import UserTransaction from "./components/UserTransaction";
import data from "./data";

function App() {
  const [loadedData, setloadedData] = useState({});
  const [userRewards, setCalcRewards] = useState({});
  const [userTransactions, setUserTransactions] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState("");
  const [newTransaction, setNewTransaction] = useState({
    date: new Date(),
    amount: 0,
  });

  useEffect(() => {
    setloadedData({ ...data });
    setUsers([...Object.keys(data)]);
  }, []);

  const userSelect = (value) => {
    setCurrentUser(value);
    let userData = loadedData[value];

    let monthT = {
      1: {
        amounts: [],
        rewards: 0,
      },
      2: {
        amounts: [],
        rewards: 0,
      },
      3: {
        amounts: [],
        rewards: 0,
      },
    };
    for (let i = 0; i < userData.length; i++) {
      let month = new Date(userData[i]["date"]);
      if (
        month.getMonth() + 1 == 1 ||
        month.getMonth() + 1 == 2 ||
        month.getMonth() + 1 == 3
      ) {
        monthT[month.getMonth() + 1]["amounts"].push(userData[i]["amount"]);
      }
    }
    for (let key in monthT) {
      let total_month_rewards = 0;
      for (let i = 0; i < monthT[key]["amounts"].length; i++) {
        let price = monthT[key]["amounts"][i];

        total_month_rewards = total_month_rewards + calRew(price);
      }
      monthT[key]["rewards"] = total_month_rewards;
    }
    console.log(monthT);
    setCalcRewards({ ...monthT });
    setUserTransactions([...userData]);
  };

  const updateInput = (e) => {
    if (e.target.name === "date") {
      setNewTransaction({ ...newTransaction, ...{ date: e.target.value } });
    }
    if (e.target.name === "amount") {
      setNewTransaction({ ...newTransaction, ...{ amount: e.target.value } });
    }
  };

  const btnAddtransaction = () => {
    let data = { ...loadedData };
    let month = new Date(newTransaction["date"]);
    if (
      month.getMonth() + 1 === -1 ||
      month.getMonth() + 1 === 2 ||
      month.getMonth() + 1 === 3
    ) {
      data[currentUser].push(newTransaction);
      console.log(data);
      setloadedData({ ...data });
      userSelect(currentUser);
    }
    setNewTransaction({ date: new Date(), amount: 0 });
  };

  const calRew = (price) => {
    if (price >= 50 && price < 100) {
      return price - 50;
    } else if (price > 100) {
      return 2 * (price - 100) + 50;
    }
    return 0;
  };

  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "50px",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
        minHeight: "60vh",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center" }}>User Rewards Dashborad</h2>
      <div className="select-style">
        <select
          onChange={(e) => userSelect(e.target.value)}
          value={currentUser}
        >
          <option value="" disabled>
            Select User
          </option>
          {users.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item.toUpperCase()}
              </option>
            );
          })}
        </select>
      </div>
      {Object.keys(userRewards).length > 0 && (
        <Fragment>
          <RewardHistory userRewards={userRewards} />
          <UserTransaction userTransactions={userTransactions} />
          <AddTransaction
            updateInput={updateInput}
            newTransaction={newTransaction}
            btnAddtransaction={btnAddtransaction}
          />
        </Fragment>
      )}
    </div>
  );
}

export default App;
