import React, { Component } from 'react';

import { Card } from './card'

interface MainProps {
    active?: boolean;
}

interface MainState {
// value: number;
}
  
export class Main extends Component<MainProps, MainState> {
      constructor(props: MainProps) {
          super(props);
          this.myFunc = this.myFunc.bind(this);
      }
      
      myFunc() {
      }
      
      render = () => (<>
        <main role="main">

            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                    <p>
                    <a href="#" className="btn btn-primary my-2">Main call to action</a>
                    <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        
                            {new Array(9).fill(0).map(() => (
                                <div className="col-md-4">
                                    <Card
                                        text="This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                                        time={ new Date().getTime() - 1000*60*10 }
                                    />
                                </div>
                            ))}
                            
                    </div>
                </div>
            </div>

        </main>
      </>)
  }