import React from "react";
import belt from './images/belt.jpg';
import fridge from './images/fridge.jpg';
import pant from './images/pant.jpg';
import shirt from './images/shirt.jpg';
import shoes from './images/shooes.jpg';
import sofa from './images/sofa.jpg';
import tv from './images/tv.jpg';
import wash from './images/washing_mechile.jpg';
import watch from './images/watch.jpg';
import './catalog.css';

export const Catalog=()=>{
    return(
        <div class="card">
            <section class="catalog">
                <div class="product">
                    <img src={wash}/>
                    <p>washing machine</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={belt}/>
                    <p>belt</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={fridge}/>
                    <p>fridge</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={pant}/>
                    <p>pant</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={shirt}/>
                    <p>shirt</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={shoes}/>
                    <p>shoees</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={sofa}/>
                    <p>sofa</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={tv}/>
                    <p>TV</p>
                    <button>Add to cart</button>
                </div>
                <div class="product">
                    <img src={watch}/>
                    <p>watch</p>
                    <button>Add to cart</button>
                </div>
            </section>
        </div>
    );
}