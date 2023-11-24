import HigherOrderFunctions from "./HigherOrdercomponent";
import React from "react";

class Displayall extends React.Component{
    renderItems = (data) => {
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
        render(props){
            const age=this.props.name
            return(
                <>
                 <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems(age)} </ul>
                </div>
                </>
                )}
}
export default Displayall