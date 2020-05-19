import React, { Component } from 'react';
import { FeaturedPostModel } from './model'

interface FeaturedPostProps {
    model: FeaturedPostModel;
}

interface FeaturedPostState {
    model?: FeaturedPostModel;
    show?: boolean;
}
  
export class FeaturedPost
        extends Component<FeaturedPostProps, FeaturedPostState> {
    
      constructor(props: FeaturedPostProps) {
          super(props);
      }
      
      componentWillReceiveProps({ model }: FeaturedPostProps) {
        this.setState({ model });
      }

      render = () => {
        let { model } = Object.assign({}, this.props, this.state)
        
        let {
            links,
            title,
            description
        } = model;

      return <>
        <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
            <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">{ title }</h1>
            <p className="lead my-3">{ description }</p>
            <p className="lead mb-0">
                {links? Object.keys(links).map(text => (
                    <a href={`${links[text]}`} className="text-white font-weight-bold">{ text }</a>
                )):''}
            </p>
            </div>
        </div>
      </>}
  }