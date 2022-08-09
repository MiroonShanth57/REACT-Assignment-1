import { Component } from "react";
import * as React from 'react';
import ProductsMange from "../../components/Products";


class ProductsPage extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <ProductsMange/>
        )
    }

}

export default ProductsPage