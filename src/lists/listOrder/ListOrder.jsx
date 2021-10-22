import React from "react";
import ListItemOrder from "./ListItemOrder";

class ListOrder extends React.Component{
    render(){
        const {listOrder, deleteProduct} = this.props;

        return(
            <ul className={'products'}>
                {listOrder.map((item) => {
                    return <ListItemOrder product={item} deleteProduct={deleteProduct}/>
                }
                )}
            </ul>
        );
    }
}

export default ListOrder; 