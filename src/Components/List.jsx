import React, {Component} from "react";


class List extends Component{
            
    render(){
        console.log(this.props.getItems)
        return (
            <div>
                <ul>
                    {this.props.getItems.map((item, index) => {
                    return <div key={index}> <ul>
                        {item.isPurchased === 'true' && <h3 className='list-line'><bold>Item Purchased</bold></h3>}
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



 

