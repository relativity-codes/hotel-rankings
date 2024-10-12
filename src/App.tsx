import React, { Suspense, lazy, ComponentType } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import Notfound from './components/Notfound';
type LoadableProps = React.ComponentProps<any>;

export const Loadable = (Component: ComponentType<LoadableProps>) => (props: LoadableProps) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);
const Home = Loadable(lazy(() => import('./pages/home/index')));
const Admin = Loadable(lazy(() => import('./pages/admin/hotels/index')));
const HotelDetail  = Loadable(lazy(() => import('./pages/home/hotel-detail')));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} errorElement={<Notfound />} />
          <Route path='hotel/:id' element={<HotelDetail />} errorElement={<Notfound />} />
          <Route path="/admin" element={<Admin />} errorElement={<Notfound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
