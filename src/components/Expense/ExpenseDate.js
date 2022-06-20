import "./ExpenseDate.css";

function ExpenseDate(props) {
  //   const month = props.date.toLocaleString("en-US", { month: "long" });
  //   const year = props.date.getFullYear();
  //   const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  var dateObj = new Date(props.date);
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
