import React, { Component } from 'react';
import { HeaderModel } from './model'

interface HeaderProps {
    model: HeaderModel;
}

interface HeaderState {
    model?: HeaderModel;
    show?: boolean;
}
  
export class Header
        extends Component<HeaderProps, HeaderState> {
    
      constructor(props: HeaderProps) {
          super(props);
      }
      
      componentWillReceiveProps({ model }: HeaderProps) {
        this.setState({ model });  
      }
      
      private links: {[k:string]: string} = {
          'text': 'link'
      };

      render = () => {
        // let { model } = Object.assign({}, this.props, this.state)
        let {
            links 
        } = this;
      return <>
        <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
                <a className="text-muted" href="#">Subscribe</a>
            </div>
            <div className="col-4 text-center">
                <a className="blog-header-logo text-dark" href="#">Large</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <a className="text-muted" href="#">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg> */}
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
            </div>
            </div>
        </header>
        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">

            {links? Object.keys(links).map(text => (
                <a className="p-2 text-muted" href={`${links[text]}`}>{ text }</a>
            )):''}
            
            </nav>
      </div>
      </>}
  }