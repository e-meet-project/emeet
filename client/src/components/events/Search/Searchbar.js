import React, { Component } from 'react'
import '../../events/Search/search.css'

export default class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar">
        <label htmlFor="search">
        <input 
            type ="text" 
            name ="search" 
            id= "search" 
            placeholder= "Find your next emeet.." 
            value= {this.props.search}
            onChange= {this.props.filter} //{this.handleChange}  //onChange={this.props.filter}
            class="searchBar"
        />
        </label> 

      </div>
    )
  }
}


    //     {/* <br/> <br/>
    //     <label htmlFor="stockIn"> Show only items in-stock? 
    //         <input 
    //             type="checkbox"
    //             name="stockIn"
    //             id="stockIn"
    //             // checked={this.props.onlyInStock}
    //             onChange={this.props.onlyStocked}   */}
    //     {/* />
    // </label> */}}
