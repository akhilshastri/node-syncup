import './App.css';

import { Switch, Route, Link,Redirect } from "react-router-dom";
import Login  from './components/login';
import UploadFile from './components/fileUpload';

function App() {
  return (
    <div>
      <Switch>
      {/* <Login/> */}
      <Route exact path="/login" component={Login} />
      <Route exact path="/uploadFile" component={UploadFile} />
      <Redirect to='/login' exact/>
      </Switch>
    </div>
  );
}

export default App;
