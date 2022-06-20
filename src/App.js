import { useState } from "react";

import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSE_DATA = () => [
  {
    id: "id_1",
    title: "Toilet Paper",
    amount: 94.4,
    date: new Date(2020, 2, 20),
  },
  {
    id: "id_2",
    title: "Toilet Paper 1",
    amount: 4.4,
    date: new Date(2000, 8, 20),
  },
  {
    id: "id_3",
    title: "Toilet Paper 2",
    amount: 4.4,
    date: new Date(2000, 8, 20),
  },
  {
    id: "id_4",
    title: "Toilet Paper 3",
    amount: 4.4,
    date: new Date(2000, 8, 20),
  },
];

function App(props) {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE_DATA);

  const addExpensehandler = (itemDataFromExpenseForm) => {
    setExpenses((prevExpenses) => {
      return [itemDataFromExpenseForm, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSaveNewExpenseData={addExpensehandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
