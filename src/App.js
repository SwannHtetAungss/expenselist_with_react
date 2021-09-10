import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  return (
    <div>
      <NewExpense></NewExpense>
      <Expense></Expense>
    </div>
  );
}

export default App;
