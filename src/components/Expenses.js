import "./ExpenseItems.css";
import ExpenseItems from "./ExpenseItems";
import Card from "./Card";

function ExpenseCard(props) {
  return (
    <Card className="expenses">
      <ExpenseItems
        title={props.elmts[0].title}
        amount={props.elmts[0].amount}
        date={props.elmts[0].date}
      />
      <ExpenseItems
        title={props.elmts[1].title}
        amount={props.elmts[1].amount}
        date={props.elmts[1].date}
      />
      <ExpenseItems
        title={props.elmts[2].title}
        amount={props.elmts[2].amount}
        date={props.elmts[2].date}
      />
      <ExpenseItems
        title={props.elmts[3].title}
        amount={props.elmts[3].amount}
        date={props.elmts[3].date}
      />
    </Card>
  );
}

export default ExpenseCard;
