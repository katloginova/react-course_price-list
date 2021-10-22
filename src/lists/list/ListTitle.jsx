import React from "react";


class ListTitle extends React.Component{
    render(){
        return(
            <li className={'products-head'}>
                <div className={'head-category category'}>{'category'}</div>
                <div className={'head-title title'}>{'title'}</div>
                <div className={'head-price price'}>{'price'}</div>
                <button className={'btn btn_none'}>{'add'}</button>
            </li>
        );
    }
}

export default ListTitle; 