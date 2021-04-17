import ExpenseCard from "./components/Expenses";

function App() {
  const expenseArray = [
    {
      title: "Car Insurance",
      amount: 368.5,
      date: new Date(2021, 3, 20),
    },
    {
      title: "Books",
      amount: 34.5,
      date: new Date(2021, 3, 21),
    },
    {
      title: "Food",
      amount: 89.0,
      date: new Date(2021, 3, 22),
    },
    {
      title: "Mobile Bill",
      amount: 120,
      date: new Date(2021, 3, 23),
    },
  ];

  return <ExpenseCard elmts={expenseArray} />;
}

export default App;
