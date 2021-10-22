import React from "react";
import ListItem from "./ListItem";
import ListTitle from "./ListTitle";
import './style.css';

class List extends React.Component{
    render(){
        const {list, addProduct} = this.props;

        return(
            <ul className={'products'}>
                <ListTitle />
                
                {list.map((item) => {
                    return <ListItem product={item} addProduct={addProduct}/>
                }
                )}
            </ul>
        );
    }
}

export default List; 