import Header from "./components/Header"
import ListeEmp from "./components/ListeEmp"
import {Provider} from "./context"
import AddEmploye from "./components/AddEmploye"


function App() {
  return (
    <Provider>
      <div className="App">
        <Header/>
        <div className="container">
          <AddEmploye/>
          <ListeEmp/>
        </div>);
      </div>
    </Provider>
  );
}

export default App;
