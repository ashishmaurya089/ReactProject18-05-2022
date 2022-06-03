import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";

function Expenses(props) {

    return (
        <div className="expenses">
            <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
            <ExpenseItem title={props.item[1].title} amount={props.item[1].amount} date={props.item[1].date} />
        </div>
    );
}

export default Expenses;
