import React, { Component } from 'react';
// import { HeaderModel } from './model'

interface FooterProps {
    model: any; //FooterModel;
}

interface FooterState {}
  
export class Footer
        extends Component<FooterProps, FooterState> {


      constructor(props: FooterProps) {
          super(props);
          Object.assign(this, props.model);
        //   this.handleClick = this.handleClick.bind(this);
      }
      
      render = () => {

        return <>
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                    <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read the <a href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
        </>
      }
  }