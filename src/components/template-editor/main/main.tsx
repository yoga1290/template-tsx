import React, { Component, ChangeEvent, EventHandler } from 'react';

import { AlbumData } from '../../album/data';
import { Album } from '../../album';
import Ajv from 'ajv';
import schema from './album.schema.json';
const ajv = new Ajv().compile(schema);

interface MainProps {
}

interface MainState {
    value: string;
    error?: string | null;
    errors?: Ajv.ErrorObject[];
}
  
export class Main extends Component<MainProps, MainState> {
      constructor(props: MainProps) {
          super(props);
          this.onChange = this.onChange.bind(this);
      }

      private onChange: EventHandler<ChangeEvent> = ( { target } : ChangeEvent<HTMLTextAreaElement>) => {
            let { value } = target;
            if(!ajv(value as string)) {
                let { errors } = ajv;
                ajv.errors.forEach(({
                    schemaPath,
                    message
                }) => {
                    console.log(schemaPath, message);
                });
                this.setState( { errors });
                return;
            }
            this.setState( { value });
      }
      
      
      render = () => {
          console.log('Template Editor')

        let { errors } = Object.assign({errors: []}, this.state);

        console.log('errors', errors)
        let { value } = Object.assign(
            {value: JSON.stringify(new AlbumData(),null,2)},
            this.state);

        let model = JSON.parse(value);

      return <>
        <main role="main">

            <div className="album py-5 bg-light">
                <div className="container">

                    <div className="row">
                        
                    <div className={`card col-12 mb-12 shadow-sm`}>

            <div className="card-body">
                <p className="card-text">Edit template model/state</p>
                <div className="d-flex justify-content-between align-items-center">
                
                <div className="form-group col-12">
                    <textarea className="form-control col-12" rows={20} onChange={this.onChange} value={value}></textarea>
                </div>

                { errors.forEach(({
                    schemaPath,
                    message
                }) => (
                    <p>{`${schemaPath} ${message}`}</p>
                ))}

                </div>
            </div>
        </div>
                            
                    </div>
                </div>
            </div>

        </main>
        <Album model={model} />        
        
      </>}
  }