import React, {Component} from 'react';
import './styles.css';

class Menu extends Component {
    constructor(){
        super();

        this.state = {
            showMenu: false,
        }
        this.showMenu = this.showMenu.bind(this);
    }
    showMenu(event){
        event.preventDefault();

        this.setState({
            showMenu:true,
        });
    }
render(){
    return(
        <div className='dropdown'>
            <button  className='dropbtn' onClick={this.showMenu}>
                Menu
            </button>
            {
                this.state.showMenu ? (
                    <div className='dropdown-content'>
                        <ul >
                            <li><a href="index.php">Home</a></li>
                            <li><a href="login2.php">LoginAccess </a></li>
                            <li><a href="section.php">Prison Location</a></li>
                            <li><a href="location.php">About Us</a></li>
                            <li><a href="announce.php">Commments</a></li>
                        </ul>
                    </div>
                ) : (
                    null
                )

            }
        </div>
    )
}
}

export default Menu;