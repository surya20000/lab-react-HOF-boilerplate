import React from "react";
import Displayall from "./Displayall";
import Onusertype from "./Onusertype";
import StartwithJ from "./StartwithJ";
import Getage from "./Getage";
class HigherOrderFunctions extends React.Component{
    constructor(){
        super()
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    getTotalExperience = () => {
        const designers = this.state.userData.filter(user => user.user_type === 'Designer');
        const years = designers.map(designer => designer.years);
        const totalExperience = years.reduce((total, year) => total + year, 0);

        return totalExperience;
    }
    
       
renderItems = () => {
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
            <div>
             <Displayall name={this.state.userData}/>  
            </div> 
            <div>
            <Onusertype type={this.state.userData} userData={this.state.userData}/>
            </div>
            <div>
                <StartwithJ type={this.state.userData} userData={this.state.userData}/>
            </div>
            <div>
                <Getage type={this.state.userData} userData={this.state.userData}/>
            </div>
            <h1>Display based on Age</h1>
            <div className="display-box">
                <ul>{this.getTotalExperience()} </ul>
            </div>
            </>
        )
    }
}

export default HigherOrderFunctions
