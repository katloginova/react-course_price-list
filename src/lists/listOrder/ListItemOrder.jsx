import React from "react";


class ListItemOrder extends React.Component{
    render(){
        const {product, deleteProduct} = this.props;

        return(
            <li className={'products__item'} data-id={product.id}>
                <div className={'item-category category'}>{product.category}</div>
                <div className={'item-title title'}>{product.title}</div>
                <div className={'item-price price'}>{product.price} {'грн'}</div>
                <button className={'btn btn_delete'} onClick={deleteProduct}>{'delete'}</button>
            </li>
        );
    }
}

export default ListItemOrder; 