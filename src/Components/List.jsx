import React, {Component} from "react";


class List extends Component{
            
    render(){
        console.log(this.props.getItems)
        return (
            <div>
                <ul>
                    {this.props.getItems.map((item, index) => {
                    return <div key={index}> <ul>
                        {item.isPurchased && <h3>Item Purchased</h3>}
                        <li className="list-line"><bold>Item:</bold> {item.item}, <bold>Units: </bold>{item.units}, <bold>Quantity: </bold>{item.quantity} </li>
                        </ul>
                        </div>
                    }
                    )}
                     </ul>
                               
            </div>
        )
    }
    }
    
  

export default List

// original: does not check for isPurchased=works
// {this.props.getItems.map((item, index) => {
//     return <div key={index}> <ul>
//       <li className="list-line"><bold>Item:</bold> {item.item}, <bold>Units: </bold>{item.units}, <bold>Quantity: </bold>{item.quantity} </li>
//         </ul>
//         </div>
//     }
//     )}


//another method for rendering ifpurchased is true
// {this.props.getItems.map((item, index) => {
//     return <div key={index}> <ul>
//         <h2 style={{display: item.isPurchased ? 'block': 'none'}}></h2>
//       <li className="list-line"><bold>Item:</bold> {item.item}, <bold>Units: </bold>{item.units}, <bold>Quantity: </bold>{item.quantity} </li>
//         </ul>
 

