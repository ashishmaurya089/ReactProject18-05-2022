import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const filteredExpenses = props.item;
  return (
    <Card className="expenses">
      {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        <>
          {filteredExpenses.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
        </>
      )}
    </Card>
  );
}

export default Expenses;
