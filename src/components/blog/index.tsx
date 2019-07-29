import React, { Component } from 'react';

import { Header } from './header/header'
import { FeaturedPost } from './post/featured-post/featured-post'
import { FeaturedPostModel, StringMap } from './post/featured-post/model'

import './blog.scss'

class mFeaturedPostModel implements FeaturedPostModel {
  title: string = 'Title of a longer featured blog post';
  description: string = `Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.`;
  links: StringMap = {
      'Continue reading...': '#'
  };
}

interface BlogProps {
    className?: string;
    // model?: AlbumModel;
}

interface BlogState {
// value: number;
}

export class Blog extends Component<BlogProps, BlogState> {
      constructor(props: BlogProps) {
          super(props);
      }

      // componentWillReceiveProps({ model }: Props) {
      //     this.setState({ model });  
      // }
      
      render = () => {

        let featuredPostModel = new mFeaturedPostModel();

      return <>
        <div className="blog">
            <Header
                model={{}}/>
            
            <div className="container">
              <FeaturedPost
                  model={featuredPostModel} />
            </div>
    
        </div>
      </>}
  }