
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import NavBar from "./components/NavBar";
import Anna from "./components/Anna";
import Mariya from "./components/Mariya";
import Ivan from "./components/Ivan";
import Anton from "./components/Anton";
import Konstantin from "./components/Konstantin";
import Timur from "./components/Timur";

function App() {
  return (
    <>
        <BrowserRouter>
            <NavBar />
            <Switch>

            <Route path='/Anna'>
                <Anna />
            </Route>
            <Route path='/Mariya'>
                <Mariya />
            </Route>
            <Route path='/Ivan'>
                <Ivan />
            </Route>
            <Route path='/Anton'>
                <Anton />
            </Route>
            <Route path='/Konstantin'>
                <Konstantin />
            </Route>
            <Route path='/Timur'>
                <Timur />
            </Route>

            </Switch>

        </BrowserRouter>
    </>
  );
}

export default App;
