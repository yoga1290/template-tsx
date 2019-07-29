import React, { Component } from 'react';
import { SmallPostModel, StringMap } from './model'

interface SmallPostProps {
    model: SmallPostModel;
}

interface SmallPostState {
    model?: SmallPostModel;
    show?: boolean;
}
  
export class FeaturedPost
        extends Component<SmallPostProps, SmallPostState> {
    
      constructor(props: SmallPostProps) {
          super(props);
      }
      
      componentWillReceiveProps({ model }: SmallPostProps) {
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
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">
                    <a className="text-dark" href="#">Featured post</a>
                </h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                <a href="#">Continue reading</a>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" alt="Card image cap">
            </div>
      </>}
  }