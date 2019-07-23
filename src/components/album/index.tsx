import React, { Component } from 'react';

import { Header } from './header/header'
import { Main } from './main/main'

import './album.scss'

interface Props {
    className?: string;
}

interface State {
// value: number;
}
  
export class Album extends Component<Props, State> {
      constructor(props: Props) {
          super(props);
          this.myFunc = this.myFunc.bind(this);
      }
      
      myFunc() {
      }
      
      render = () => (<>
        <div className="album">
            <Header/>
            <Main/>
        </div>
      </>)
  }