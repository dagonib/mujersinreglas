import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Screens
import HomeScreen from './home/HomeScreen';
import EducationScreen from './education/EducationScreen';
import AgendaScreen from './agenda/AgendaScreen';
import ContactScreen from './contact/ContactScreen';

// Shop
import ShopScreen from './shop/ShopScreen';
import ProductScreen from './shop/ProductScreen';
import CartScreen from './shop/CartScreen';
import ShippingScreen from './shop/ShippingScreen';
import PaymentScreen from './shop/PaymentScreen';
import PaymentConfirmationScreen from './shop/PaymentConfirmationScreen';

// Components
import SuperHeader from './components/SuperHeader';
import Header from './components/Header';
import Footer from './components/Footer';
import BuyConditionsScreen from './information/BuyConditionsScreen';
import FrequentsAskScreen from './information/FrequentsAskScreen';
import UseGuideScreen from './information/UseGuideScreen';
import PrivacyPolicyScreen from './information/PrivacyPolicyScreen';

const Customer = () => {
  return (
    <>
      <SuperHeader />
      <Header />
      <Routes>
        <Route path="" element={<HomeScreen />} exact />
        <Route path="/bienvenida" element={<HomeScreen />} />
        <Route path="agenda" element={<AgendaScreen />} />
        <Route path="educacion" element={<EducationScreen />} />
        <Route path="tienda" element={<ShopScreen />} />
        <Route path="contacta" element={<ContactScreen />} />
        <Route path="shop/:productId" element={<ProductScreen />} />
        <Route path="cart/:productId?" element={<CartScreen />} />
        <Route path="shipping" element={<ShippingScreen />} />
        <Route path="payment/:orderId" element={<PaymentScreen />} />
        <Route
          path="payment-confirmation/:orderId"
          element={<PaymentConfirmationScreen />}
        />
        <Route
          path="condiciones-compra"
          element={<BuyConditionsScreen />}
        ></Route>
        <Route
          path="preguntas-frecuentes"
          element={<FrequentsAskScreen />}
        ></Route>
        <Route path="guia-uso" element={<UseGuideScreen />}></Route>
        <Route
          path="politica-privacidad"
          element={<PrivacyPolicyScreen />}
        ></Route>
      </Routes>

      <Footer />
    </>
  );
};

export default Customer;
