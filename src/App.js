import ExpenseItem from "./components/ExpenseItem";
function App(props) {
const expenses =[
  {
    id : "1",
    title : "Toilet Paper",
    amount : 94.4,
    date : new Date(2020, 2 , 20),
  },
  {
    id : "2",
    title : "Toilet Paper 1",
    amount : 4.4,
    date : new Date(2000, 8 , 20),
  }
]

  return (
    <>
      <h1>Hello Ashish</h1>
      <ExpenseItem  title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItem  title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      
    </>
  );
}

export default App;
