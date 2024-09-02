import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdp from './components/Pdp/Pdp';
import Login from './components/Account/Login/Login';
import Search from './components/Search/Search';

// Mise en place du lazy loading
const Root = lazy(() => import('./pages/Root'));
const App = lazy(() => import('./components/App/App'));
const Women = lazy(() => import('./components/Women/Women'));
const Cart = lazy(() => import('./components/Cart/Cart'));
const Account = lazy(() => import('./components/Account/Account'));

// Création de la racine de l'application
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Création du router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<App />} />
      <Route path="/women" element={<Women />} />
      <Route path="/women/:id" element={<Pdp />} />
      <Route path="/cart/:userId" element={<Cart />} />
      <Route path="/search" element={<Search />} />
      <Route path="/account" element={<Account />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);

// Rendu de l'application
root.render(
    <Suspense>
      <RouterProvider router={router} />
    </Suspense>
);
