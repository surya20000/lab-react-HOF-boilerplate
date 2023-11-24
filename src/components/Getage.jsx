import HigherOrderFunctions from "./HigherOrdercomponent";
import React from "react";

class Getage extends React.Component{
    getAge = () => {
        return this.props.userData.filter(user => user.age > 28 && user.age <= 50);
    }   
    renderAge = () => {
        const data = this.getAge();
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    
    render(){
        return(
            <>
             <h1>Age greater than  28 and less than 50</h1>
            <div className="display-box">
                <ul>{this.renderAge()} </ul>
            </div>
            </>
        )
    }
    
}

export default Getage