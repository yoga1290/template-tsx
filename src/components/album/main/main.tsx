import React, { Component } from 'react';


import { Card } from './card'
import { Footer } from '../footer/footer'
import { MainModel } from './model'
import { CardModel } from './card/model'

interface MainProps {
    model: MainModel;
}

interface MainState {
    model: MainModel;
}
  
export class Main extends Component<MainProps, MainState> {
      constructor(props: MainProps) {
          super(props);
      }

      componentWillReceiveProps({ model }: MainProps) {
        this.setState({ model });  
      }
      
      render = () => {

        let { model } = Object.assign({}, this.state, this.props);
        let {
            title,
            description,
            cards
        } = model;

        // let youtubeVideoId = '';

        return <>
        <main role="main">
            {/* <div className="youtube-container">
                <iframe className="youtube" src={`https://www.youtube.com/embed/${youtubeVideoId}?controls=0&autoplay=1&loop=1`} frameborder="0" allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
            <section className={`jumbotron text-center ${(title || description) ? '':'hide'}`}>
                <div className="container">
                    <h1 className="jumbotron-heading">{ title }</h1>
                    <p className="lead text-muted">{ description }</p>
                    <p>
                    {/* <a href="#" className="btn btn-primary my-2">TODO</a>
                    <a href="#" className="btn btn-secondary my-2">ToDo2</a> */}
                    </p>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        
                            {cards? cards.map( (card: CardModel) => (
                                <div className="col-md-4">
                                    <Card
                                        model={ card }
                                    />
                                </div>
                            )): ''}
                            
                    </div>
                </div>
            </div>

        </main>
        <Footer
            model={{}}/>
      </>}
  }