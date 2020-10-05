import React from "react"
// import Hero from "../hero"
import image2 from '../../images/image2.jpg'




const pStyle = {
    fontSize: '.8rem'
}

const hrStyle = {
    border: "solid",
    width: "75%",
}

const tableStyle = {
    marginTop: "60px",
    display: "grid",
    margin: "auto 10%"
}

function LunchMenu(props) {
    
    return (
        <div style={tableStyle}>
            {/* <Hero section={'Lunch'}/> */}
            <div class="top-display-lu">
            <div class="top-text bye" id="content-1">
                <h1 class="primary-head">Lunch</h1>
		    </div>
            <img src={image2} alt="placeholder" class="ABimage" />
            </div>
            
            <table className='table-item-1'>  
                <thead>
                    <tr>
                        <hr style={hrStyle}></hr>
                        <p style={pStyle}>Welcome! We are excited you have chosen to dine with us today. Take a monent to look through our new menu and see what looks tasty to you.Enjoy!</p>
                        <p>Served 11am - 3pm</p>
                        <p style={pStyle}>(All meals include hush puppies or a dinner roll and your choice of one side.) Add a premium side for one dollar.</p>
                    </tr>
                </thead>
                <tbody>  
                    <tr>       
                        <td>
                            <div>
                                <h6>Snapper/King</h6>
                            </div>
                        </td>  
                    </tr> 

                    <tr>
                        <td>
                            <div>
                                <h6>Big B Burger</h6>
                            </div>
                        </td> 
                    </tr>

                    <tr>                
                        <td>
                            <div>
                                <h6>Fish of the Day</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Chicken Breast/Strips</h6>
                            </div>
                        </td>
                    </tr>
                
                    <tr> 
                        <td>
                            <div>
                                <h6>Salmon</h6>
                            </div>
                        </td>
                    </tr>
                    
                    <tr>
                        <td>
                            <div>
                                <h6>Chicken Wings(3)</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Shrimp(15pcs)</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Hot Wings</h6>
                            </div>
                        </td>
                    </tr>

                    <tr> 
                        <td>
                            <div>
                                <h6>Conch</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Gizzards</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Steak</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Pork Chop</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
            
            <table className='table-item-2'> 
                <thead>
                    <tr>
                        <h2>$5 Lunch Specials</h2>
                        <hr style={hrStyle}></hr>
                        <p style={pStyle}>Served Tuesday - Friday</p>
                        <p style={pStyle}>(All lunch specials include fries and a drink.)<br></br>No Substitutions</p>
                    </tr>
                </thead> 
                <tbody>
                    <tr> 
                        <td>
                            <div>
                                <h6>Bojo Burger</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Pork Chop</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>Foot Long</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Sausage Sandwhich</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>Fish Whopper</h6>
                            </div>
                        </td>
                     </tr>

                     <tr>
                        <td>
                            <div>
                                <h6>Chicken Sandwhich</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>Tilapia Sandwhich</h6>
                            </div>
                        </td>
                     </tr> 

                     <tr>
                        <td>
                            <div>
                                <h6>BLT</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        
            
            <table className='table-item-3'>  
                <thead>
                    <tr>
                        <th><h2>Seafood Only Specials</h2><hr style={hrStyle}></hr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>
                            <div>
                                <h6>Snapper/King/Cat (sm or lg)</h6>
                            </div>
                        </td>  
                    </tr> 

                    <tr>              
                        <td>
                            <div>
                                <h6>Fish of the Day</h6>
                            </div>
                        </td>
                    </tr> 
                
                    <tr> 
                        <td>
                            <div>
                                <h6>Shrimp Only (sm or lg)</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Conch Only (sm or lg)</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className='table-item-4'>
                <thead>
                    <th><h2>Chicken Only Specials (Breaded or Unbreaded)</h2><hr style={hrStyle}></hr></th>
                </thead>
                <tbody>
                        
                    <tr>
                        <td>
                            <div>
                                <h6>Chicken Wings (3,5,10)</h6>
                            </div>
                        </td>
                    </tr> 

                    <tr>
                        <td>
                            <div>
                                <h6>Hot Wings (10,20,50)</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>  
                        <td>
                            <div>
                                <h6>Buffalo / Honey Mustard / BBQ </h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className='table-item-5'>  
            <thead>
                <tr>
                <th><h2>Sandwhiches</h2><hr style={hrStyle}></hr></th>
                </tr>
            </thead>
            <tbody>
                
                <tr> 
                
                <td>
                    <div>
                        <h6>Fish Whopper</h6>
                    </div>
                </td>  
        
                </tr>

                <tr>              
                <td>
                    <div>
                        <h6>Tilapia</h6>
                    </div>
                </td>
            
                </tr>

                <tr>
                <td>
                    <div>
                        <h6>Chicken Sandwhich</h6>
                    </div>
                </td>
            
                </tr>
            
                <tr> 
                
                <td>
                    <div>
                        <h6>Sausage Sandwhich</h6>
                    </div>
                </td>  
                </tr>

                <tr>
                    <td>
                    <div>
                        <h6>Bojo Burger</h6>
                    </div>
                </td>
                </tr>

                <tr>
                    <td>
                    <div>
                        <h6>Foot Long</h6>
                    </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <div>
                        <h6>Pork Chops</h6>
                    </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <div>
                        <h6>BLT</h6>
                    </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <div>
                        <h6>Grill Cheese</h6>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>

            <table className='table-item-6-5'>  
            <thead>
                <tr>
                <th><h2>Bojo Sides</h2><hr style={hrStyle}></hr></th>
                </tr>
            </thead>
            <tbody>
                
                <tr> 
                <td>
                    <div>
                        <h6>French Fries</h6>
                    </div>
                </td>  
                </tr>

                <tr>              
                <td>
                    <div>
                        <h6>Hush Puppies</h6>
                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <div>
                        <h6>Garden Salad</h6>
                    </div>
                </td>
                </tr>
            
                <tr> 
                <td>
                    <div>
                        <h6>Steamed Vegetables</h6>
                    </div>
                </td>  
                </tr>

                <tr>
                <td>
                    <div>
                        <h6>Potato Wedges</h6>
                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <div>
                        <h6>Cole Slaw</h6>
                    </div>
                </td>
                </tr>

                <tr>
                <td>
                    <div>
                        <h6>Mashed Potatoes</h6>
                    </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <div>
                        <h6>Yellow Rice</h6>
                    </div>
                </td>
                </tr>
                <tr>
                    <td>
                    <div>
                        <h6>Brown Rice</h6>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>      
    </div>
    )
}

export default LunchMenu;