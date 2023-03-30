import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useRouteProtector } from '../../shared/hooks/useRouteProtector'

export default function Gallery() {
    useRouteProtector();
    const cartCount = useSelector(store=>store.cart.cartCount);
    const productCount = useSelector(store=>store.cart.totalProducts);

    useEffect(()=>{
        //on page laod
        //this is a dummy error
        throw "some error when loading the component"
    },[]);

    return (
        <div>
            <h1>Gallery</h1>
            the cart has { cartCount } items ; selected { productCount } products<br/>
            <button>aksdjf</button>
            <button>aksdjf</button>
            <button>aksdjf</button>
            <button>aksdjf</button>
            <button>aksdjf</button>
            <button>aksdjf</button>

        </div>
    )
}
