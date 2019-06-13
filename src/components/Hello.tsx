import React, { Component } from 'react';

interface Props {
    active?: boolean;
}

interface State {
// value: number;
}
  
export class Hello extends Component<Props, State> {
      constructor(props: Props) {
          super(props);
          this.myFunc = this.myFunc.bind(this);
      }
      
      myFunc() {
      }
      
      render = () => (<>
          <div>
            Hello
          </div>
      </>)
  }