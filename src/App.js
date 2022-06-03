import Expenses from "./components/Expenses";
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
    <>
      <h1>Hello,</h1>
      <Expenses item={item}/>
      
    </>
  );
}

export default App;
