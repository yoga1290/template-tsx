import React, { Component } from 'react';

import { Header } from './header/header'
import { Main } from './main/main'

import './album.scss'
import { AlbumModel } from './model';
import { AlbumData } from './data';

interface Props {
    className?: string;
    model?: AlbumModel;
}

interface State {
// value: number;
}

export class Album extends Component<Props, State> {
      constructor(props: Props) {
          super(props);
      }

        componentWillReceiveProps({ model }: Props) {
            this.setState({ model });  
        }
      
      render = () => {
console.log('Album render')


        let model: AlbumModel
        = Object.assign(new AlbumData(), this.props.model);

        let {
            header,
            main
        } = model;

      return <>
        <div className="album">
            <Header
                model={ header }/>
            
            <Main
                model={ main }/>
        </div>
      </>}
  }