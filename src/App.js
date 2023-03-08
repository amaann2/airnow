import Menu from "./component/navbar/Menu";
import Balance from "./component/balance/Balance";
import Piechart from "./component/piechart/Piechart";
import Slider from "./component/slider/Slider";
import "./App.css";
import Incomebox from "./component/income-expense/Incomebox";
import Transaction from "./component/transaction/Transaction";
function App() {
  return (
    <div className="container">
      <div className="box1">
        <Menu />
      </div>
      <div className="box2">
        <Balance />
        {/* hello */}
      </div>
      <div className="box3">
        <Piechart />
      </div>
      <div className="box4">
        <Slider />
      </div>
      <div className="box5">
        <Transaction />
        {/* hello */}
      </div>
      <div className="box6">
        <Incomebox />
      </div>
    </div>
  );
}

export default App;
