import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from './utils/toast';
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer';

// Importing pages normally
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Category from './pages/Category'; // Uncomment if you plan to use it
import Customers from './pages/Customers';
import CustomerOrder from './pages/CustomerOrder';
import OrderInvoice from './pages/OrderInvoice';
import Coupons from './pages/Coupons'; // Uncomment if you plan to use it
import EditProfile from './pages/EditProfile';
import Page404 from './pages/404';
import ProductsPage from './pages/ProductPage';
import CustomerPage from './pages/CustomerPage';
import StaffPage from './pages/StaffPage';
import OrderPage from './pages/OrderPage';
import ProductDetails from './pages/ProductDetails';
import UpdateProduct from './pages/UpdateProduct';
import UpdateStaff from './components/staff/UpdateStaff';
import CategoryPage from './pages/CategoryPage';
import CreateProduct from './components/product/CreateProduct';
import UpdateCategoryPage from './components/category/UpdateCategoryPage';
import AddCategoryPage from './components/category/AddCategoryPage';
import AddStaff from './components/staff/AddStaff';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/products" component={Products} />
          <Route path="/get-products" component={ProductsPage} />
          <Route path="/customers" component={CustomerPage} />
          <Route path="/product-details/:id" component={ProductDetails} />
          <Route path="/category" component={Category} /> {/* Uncomment if needed */}
          <Route path="/update-product/:id" component={UpdateProduct} /> {/* Uncomment if needed */}
          <Route path="/customers" component={Customers} />
          <Route path="/customer-order/:id" component={CustomerOrder} />
          <Route path="/staffs" component={StaffPage} />
          <Route path="/orders" component={OrderPage} />
          <Route path="/add-product" component={CreateProduct} />
          <Route path="/add-staff" component={AddStaff} />
          <Route path="/update-staff/:id" component={UpdateStaff} />
          <Route path="/categories" component={CategoryPage} />
          <Route path="/update-category/:id" component={UpdateCategoryPage} />
          <Route path="/add-category" component={AddCategoryPage} />
          <Route path="/order/:id" component={OrderInvoice} />
          <Route path="/coupons" component={Coupons} /> {/* Uncomment if needed */}
          <Route path="/setting" component={EditProfile} />
          <Route path="/404" component={Page404} />
          <Route exact path="/" component={SignUp} />
          <Route path="/admin-login" component={SignIn} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route render={() => <Page404 />} /> {/* Catch-all for undefined routes */}
        </Switch>
      </Router>
    </>
  );
};

export default App;
