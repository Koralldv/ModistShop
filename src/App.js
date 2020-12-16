import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Helmet from "react-helmet"

import NotFound from './pages/NotFound'
import './App.css';

import {Nav, Footer, ScrollToTop} from './components/'
import { Home, Cart, AboutPage, ContactPage, BlogPage, BlogFullItem, ShopPage, ProductSingle, Delivery, FAQ, Policy } from './pages';


const nav = [
  {
    title: 'Главная',
    link: ''
},
{
  title: 'Магазин',
  link: 'shop'
},
{
  title: 'О нас',
  link: 'about'
},
{
  title: 'Блог',
  link: 'blog'
},
{
  title: 'Контакты',
  link: 'contact'
},
]
  const footerItems = {
  title: 'modist',
  titleContacts: 'HAVE A QUESTIONS?',
  menu : nav,
  help : [{
    title: 'Доставка',
    link: 'delivery'
  },
  {
    title: 'FAQ',
    link: 'faq'
  },
  {
    title: 'Конфиденциальность',
    link: 'policy'
  },],
  links: [
    {
      link: 'https://twitter.com/',
      icon: 'fa-twitter'
    },
    {
      link: 'https://www.facebook.com/',
      icon: 'fa-facebook-f'
    },
    {
      link: 'https://www.instagram.com/',
      icon: 'fa-instagram'
    }
  ],
  contacts : [
    {
      content: '203 Fake St. Mountain View, San Francisco, California, USA',
      icon: 'fa-map-marker',
    },
    {
      content: '+2 392 3929 210',
      icon: 'fa-phone',
    },
    {
      content: 'info@yourdomain.com',
      icon: 'fa-envelope',
    },
  ]
}

function App(){
    return (
      <div>
        <Helmet
                title="MODIST"
                />
         <Router>
         <ScrollToTop />
        <Nav nav={nav} />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route  exact path="/blog" component={BlogPage} />
        <Route  exact path="/blog/:id" component={BlogFullItem} />
        <Route  exact path="/shop" component={ShopPage} />
        <Route  exact path="/shop/:id" component={ProductSingle} />
        <Route  exact path="/delivery"  component={Delivery} />
        <Route  exact path="/faq"  component={FAQ} />
        <Route  exact path="/policy"  component={Policy} />
        <Route exact path="*/**" component={NotFound} />
        </Switch>
        
        <Footer footerItems={footerItems}/>
        </Router>
      </div>
    );
  }

export default App;
