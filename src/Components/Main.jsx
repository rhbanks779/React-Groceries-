import React, {Component} from "react";


class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
                item: '',
                units: '',
                quantity: '',
                isPurchased: false

            }
    
            } 
        saveInfo = addItems => {
          this.setState({[addItems.target.id] : addItems.target.value})  
        
    }        
       
     
    
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state)
        this.props.getList(this.state)
        
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
            
            
                <div className='list'>
                    
                    <label><strong>Item: </strong></label>
                    <input id='item' type='text' value={this.state.item} onChange={this.saveInfo} />

                    <label><strong>Units: </strong></label>
                    <input id='units' type='text' value={this.state.units} onChange={this.saveInfo}/>

                    <label><strong>Quantity: </strong></label>
                    <input id='quantity' type='text' value={this.state.quantity} onChange={this.saveInfo} />
                    <br></br>
                    <button><strong>Add Item</strong></button>
                                      
                                          
                </div>
            </form>
        )
    }
}
export default Main

//<button id='isPurchased' value={this.state.isPurchased} onClick={this.saveInfo}><strong>Click if Purchased</strong></button>
//for rendering if purchased is true