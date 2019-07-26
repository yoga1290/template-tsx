import React, { Component } from 'react';
import { HeaderModel } from './model'

interface HeaderProps {
    model: HeaderModel;
    show?: boolean;
}

interface HeaderState {
    model?: HeaderModel;
    show?: boolean;
}
  
export class Header
        extends Component<HeaderProps, HeaderState> {
    
      constructor(props: HeaderProps) {
          super(props);
          this.handleClick = this.handleClick.bind(this);
      }
      
      componentWillReceiveProps({ model, show }: HeaderProps) {
        this.setState({ model, show });  
      }

    private show : boolean | undefined = false;
      handleClick() {
          this.show = !this.show;
          let { show } = this;
          let { model } = Object.assign({}, this.props, this.state);
          this.setState({ show, model });
      }
      
      render = () => {
          
        let show = this.show;
        if (this.state) {
            show = this.state.show;
        }

        let { model } = Object.assign({}, this.props, this.state)

        let {
            appName,
            contact,
            about,
            // image
        } = model;

      return <>
        <header>
            <div
                className={`collapse bg-dark ${show ? 'show':''}`}
                id="navbarHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-md-7 py-4">
                            <h4 className="text-white">About</h4>
                            <p className="text-muted">{ about }</p>
                        </div>
                        <div className="col-sm-4 offset-md-1 py-4">
                            <h4 className="text-white">Contact</h4>
                            <ul className="list-unstyled">
                                {contact? Object.keys(contact).map(text => (
                                    <li><a href={ contact[text] } className="text-white">{ text }</a></li>
                                )):''}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar navbar-dark bg-dark shadow-sm">
                <div className="container d-flex justify-content-between">
                    <a href="#" className="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="mr-2" viewBox="0 0 24 24" focusable="false"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                        <strong>{ appName }</strong>
                    </a>
                    <button 
                        onClick = {this.handleClick}
                        className="navbar-toggler"
                        type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </header>
      </>}
  }