import React, { Component } from 'react';

import { Main } from './main/main'

interface Props {
    className?: string;
    // model: AlbumModel;
}

interface State {
// value: number;
}

export class TemplateEditor extends Component<Props, State> {
      constructor(props: Props) {
          super(props);
      }
      
      render = () => {

      return <>
        <Main/>
      </>}
  }