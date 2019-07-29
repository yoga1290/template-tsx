import React from 'react';

import { HashRouter as HashRouter, Route } from "react-router-dom";

import { Album } from './album';
import { Blog } from './blog';
import { TemplateEditor } from './template-editor';
import './App.scss';
import '../ga.js';


export const App = () => (
  <>
    <HashRouter basename="/">

      <Route exact path='/' component={Album}  />
      <Route exact path="/album" component={Album} />
      <Route exact path="/blog" component={Blog} />

      <Route exact path="/:template/edit" component={TemplateEditor} />

    </HashRouter>
  </>
);
