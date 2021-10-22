import React from "react";
import './style.css';

class ResultOrder extends React.Component{
    render(){
        const {result} = this.props;

        return(
            <div className={'result'}>
                {`Общая сумма: ${result} грн`}
            </div>
        );
    }
}

export default ResultOrder; 