import React, {Component} from 'react';

class Dashboard extends Component {
    render(){
        return(
            <div className='property-container'>
            <button>Add new property</button>
            <div className='rent-category'>
                <span>List properties with 'desired rent' greator than: $ <input placeholder='0'/></span>
                <button>Filter</button>
                <button>Reset</button>
            </div>
            <div className='home-listings-container'>
            <h1>Home Listings</h1>
            </div>
            </div>
        )
    }
}