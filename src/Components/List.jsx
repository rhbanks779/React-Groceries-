import React, {Component} from "react";


class List extends Component{
            
    render(){
        console.log(this.props.getItems)
        return (
            <div>
                <ul>
                    {this.props.getItems.map((item, index) => {
                    return <div key={index}> <ul>
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


 //for rendering ifpurchased is true

// {this.props.getItems.map((item, index) => {
//     return <div key ={index}> <ul>
//         const isPurch = item.isPurchased;
//             if (isPurch === false){
//                  <li  className="list-line"><bold>Item:</bold> {item.item} <bold>Units: </bold>{item.units} <bold>Quantity: </bold>{item.quantity} </li>
//            } else {
//                 <li>item purchased</li>
//          </ul>
//         </div>
//         }
//     )}