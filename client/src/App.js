import { Route, Switch} from "react-router-dom";
import Home from "./screens/Home/Home";
import Questions from "./screens/Questions/Questions";
import DetailQuestion from "./screens/DetailQuestion/DetailQuestion";
import CreateQuestion from "./screens/CreateQuestion/CreateQuestion";
import './App.css';

function App() {
  // const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/questions">
          <Questions />
        </Route>
        <Route exact path = "/questions/:id">
          <DetailQuestion />
        </Route>
        <Route exact path = "/add-question">
          <CreateQuestion user={1}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
