import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItems(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        <h2>{props.amount}</h2>
      </div>
    </Card>
  );
}

export default ExpenseItems;
