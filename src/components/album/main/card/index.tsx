import React, { Component } from 'react';
import moment from 'moment'
import { CardModel } from './model'

import {  Link } from "react-router-dom";


interface CardProps {
    className?: string;
    model: CardModel;
}

interface CardState {
// value: number;
}
  
export class Card extends Component<CardProps, CardState> {
      constructor(props: CardProps) {
          super(props);
      }
      componentWillReceiveProps({ model }: CardProps) {
        this.setState({ model });  
      }
      
      render = () => {
        
        let {
            model,
            className
        } = Object.assign({}, this.state, this.props);

        let {
            text,
            time,
            image,
            links
        } = model;

        return <>
        <div className={`card mb-4 shadow-sm ${className}`}>
            <img
                className="bd-placeholder-img card-img-top"
                src={image} />
            <div className="card-body">
                <p className="card-text">{text}</p>
                <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                    {links? Object.keys(links).map(text => (
                        
                        <Link to={links[text]}>
                            <button type="button" className="btn btn-sm btn-outline-secondary">{ text }</button>                    
                        </Link>
                    )):''}
                    

                </div>
                <small className="text-muted">{ moment(time).startOf('hour').fromNow() }</small>
                </div>
            </div>
        </div>
      </>}
  }
