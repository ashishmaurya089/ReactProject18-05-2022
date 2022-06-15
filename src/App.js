import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App(props) {
const item =[
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
    <div>
      <NewExpense/>
      <Expenses item={item}/>      
    </div>
  );
}

export default App;
