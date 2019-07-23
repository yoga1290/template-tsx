import React, { Component } from 'react';
import moment from 'moment'

interface CardProps {
    className?: string;
    text?: string;
    image?: string;
    time?: number;
}

interface CardState {
// value: number;
}
  
export class Card extends Component<CardProps, CardState> {
      constructor(props: CardProps) {
          super(props);
          this.myFunc = this.myFunc.bind(this);
      }
      
      myFunc() {
      }
      
      render = () => {
        
        let {
            className,
            text,
            time,
            image
        } = this.props;

        return <>
        <div className={`card mb-4 shadow-sm ${className}`}>
            <img
                className="bd-placeholder-img card-img-top"
                src={image} />
            <div className="card-body">
                <p className="card-text">{text}</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">{ moment(time).startOf('hour').fromNow() }</small>
                </div>
            </div>
        </div>
      </>}
  }
