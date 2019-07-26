import React from 'react';

import { BrowserRouter as HashRouter, Route } from "react-router-dom";

import { Album } from './album';
import { TemplateEditor } from './template-editor';
import './App.scss';
import '../ga.js';


export const App = () => (
  <>
    <HashRouter basename="/template-tsx">
      <Route exact path="/" component={Album}  />
      {/* <Route exact path="/#/album" component={Album} /> */}
      <Route exact path="/#/:template/edit" component={TemplateEditor} />

    </HashRouter>
  </>
);
