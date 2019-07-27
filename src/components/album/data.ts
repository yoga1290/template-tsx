import { HeaderModel } from './header/model'
import { CardModel } from './main/card/model'
import { MainModel } from './main/model'
import { AlbumModel } from './model'

class Header implements HeaderModel {
    appName= 'Youssef Gamil';
    
    about= `Add some information about the album below,
    the author, or any other background context.
    Make it a few sentences long so folks can pick up some informative tidbits.
    Then, link them off to some social networking sites or contact information.`;

    contact= {
        'Like on Facebook': '#Link',
        'Email me':'#'
    };
}

class Body implements MainModel {
    title: string = "Bootstrap templates in React/TSX";
    description: string = `I'm just splitting the Bootstrap example templates into React/TSX componantes w Prop/State models`;
    cards: CardModel[] = [{
        text:'Album',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/album.png',
        time: (new Date().getTime()-60*60*10*1000),
        links: {
            'Edit': '/album/edit'
        }
    }, {
        text:'Pricing',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/pricing.png',
        time: (new Date().getTime()-60*60*10*1000)
    }, {
        text:'Checkout',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/checkout.png',
        time: (new Date().getTime()-60*60*10*1000)
    }, {
        text:'Product',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/product.png',
        time: (new Date().getTime()-60*60*10*1000)
    }, {
        text:'Cover',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/cover.png',
        time: (new Date().getTime()-60*60*10*1000)
    }, {
        text:'Carousel',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/carousel.png',
        time: (new Date().getTime()-60*60*10*1000)
    }, {
        text:'Blog',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/blog.png',
        time: (new Date().getTime()-60*60*10*1000)
    }, {
        text:'Dashboard',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/dashboard.png',
        time: (new Date().getTime()-60*60*10*1000)
    }, {
        text:'Sign in',
        image:'https://getbootstrap.com/docs/4.3/assets/img/examples/sign-in.png',
        time: (new Date().getTime()-60*60*10*1000)
    }];
}

export class AlbumData implements AlbumModel {
    header: HeaderModel = new Header();
    main: MainModel = new Body();
}
