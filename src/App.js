import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import HomeContainer from './Page/HomeComponent/Home/HomeContainer';
import Header from './Page/Shared/Header/Header';
import Login from './Page/HomeComponent/Login/Login';
import Dashboard from './Page/DashBoard/Dashboard';
import WoodProduct from './Page/HomeComponent/WoodProduct/WoodProduct';
import Register from './Page/HomeComponent/Register/Register';
import AuthProvider from './Page/Context/AuthProvider';
import PrivateRoute from './Page/Route/PrivateRoute';
import OrderDetailPage from './Page/OrderDetailPage/OrderDetailPage';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
<Route exact path='/'>
<HomeContainer></HomeContainer>
</Route>
<Route  path='/home'>
<HomeContainer></HomeContainer>
</Route>
<PrivateRoute  path='/dashBoard'>
<Dashboard></Dashboard>
</PrivateRoute>
<PrivateRoute  path='/orderDetailPage/:id'>
<OrderDetailPage></OrderDetailPage>
</PrivateRoute>
<Route  path='/explore'>
<WoodProduct></WoodProduct>
</Route>
<Route  path='/login'>
<Login></Login>
</Route>
<Route  path='/register'>
<Register></Register>
</Route>
      </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
