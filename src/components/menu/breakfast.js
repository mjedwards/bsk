import React from "react"
// import Hero from "../hero"
import image1 from '../../images/image1.jpg'



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


function BreakfastMenu() {

    return (
        <div className="responsive-table" style={tableStyle}>
            {/* <Hero section={'Breakfast'}/> */}
            <div class="top-display">
            <div class="top-text bye" id="content-1">
                <h1 class="primary-head">Breakfast</h1>
		    </div>
            <h1><img src={image1} alt="" class="ABimage" /></h1>
            </div>
           
            <table className='table-item-1'>  
                <thead>
                    <tr>
                        <h2></h2>
                        <hr style={hrStyle}></hr>
                        <p style={pStyle}>Welcome! We are excited you have chosen to dine with us today. Take a monent to look through our new menu and see what looks tasty to you.Enjoy!</p>
                        <p>Served 7am - 12pm</p>
                        <p style={pStyle}>(All breakfast is served with grits, hash browns, eggs, and toast fixed to order</p>
                    </tr>
                </thead>
                <tbody>
                    <tr>  
                        <td>
                            <div>
                                <h6>Snapper/King/Cat</h6>
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
                                <h6>Salmon</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Shrimp(10pcs)</h6>
                            </div>
                        </td>
                    </tr>
                
                    <tr>          
                        <td>
                            <div>
                                <h6>Salmon Patty(2)</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Corn Beef Hash</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Bacon (3 slices) (turkey/pork)</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Sausage Patty(2)</h6>
                            </div>
                        </td>
                    </tr>

                    <tr> 
                        <td>
                            <div>
                                <h6>Sausage Link</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Chicken Wings</h6>
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
                                <h6>Pork Chop</h6>
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

                    
                </tbody>
            </table>
            
            <table className='table-item-2'> 
                <thead>
                    <tr>
                        <hr style={hrStyle}></hr>
                        <p style={pStyle}>Served with Bacon, Sausage, or Chicken and Eggs</p>
                        <p style={pStyle}>Cheese .25, Egg Whites 1.00 Substitute, Toast for biscuits .50 extra</p>
                    </tr>
                </thead> 
                <tbody>
                    <tr> 
                        <td>
                            <div>
                                <h6>Pancakes</h6>
                            </div>
                        </td>  
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <h6>Waffles</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>French Toast</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Omletes (Made to Order)</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
          
            <table className='table-item-3'>  
                <thead>
                    <tr>
                        <th><h2>Burritos</h2><hr style={hrStyle}></hr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <h6>Shrimp and Egg</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Bacon, Egg</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Sausage, Egg</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Egg</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className='table-item-4'>  
                <thead>
                    <tr>
                        <th><h2>Bowls</h2><hr style={hrStyle}></hr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>
                            <div>
                                <h6>Shrimp in Grits</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>Shrimp in Grit</h6>
                            </div>
                        </td>
                    </tr>
                
                    <tr> 
                        <td>
                            <div>
                                <h6>Grits and Salmon Patty with Egg</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Grits and Bacon with Egg</h6>
                            </div>
                        </td>
                    </tr>

                    <tr> 
                        <td>
                            <div>
                                <h6>Grits and Sausage with Egg</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Grits and Cornbeef with Egg</h6>
                            </div>
                        </td>
                    </tr>

                    <tr> 
                        <td>
                            <div>
                                <h6>Grits and Egg with Toast</h6>
                            </div>
                        </td>  
                    </tr>
                </tbody>
            </table>

            <table className='table-item-5'>  
                <thead>
                    <tr>
                        <th><h2>Breakfast Sandwhiches</h2><hr style={hrStyle}></hr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>
                            <div>
                                <h6>Salmon Patty</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>Bacon (Turkey/Pork)</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Link Sausage</h6>
                            </div>
                        </td>
                    </tr>
            
                    <tr> 
                        <td>
                            <div>
                                <h6>Patty Sausage</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Egg</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className='table-item-6'>  
                <thead>
                    <tr>
                        <th><h2>Beverages</h2><hr style={hrStyle}></hr></th>
                    </tr>
                </thead>
                <tbody>        
                    <tr> 
                        <td>
                            <div>
                                <h6>Orange Juice</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>Apple Juice</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Coffeee</h6>
                            </div>
                        </td>
                    </tr>
                
                    <tr>     
                        <td>
                            <div>
                                <h6>Milk</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table className='table-item-7'>  
                <thead>
                    <tr>
                        <th><h2>Breakfast Extras</h2><hr style={hrStyle}></hr></th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>
                            <div>
                                <h6>Bacon (slice)</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>              
                        <td>
                            <div>
                                <h6>Sausage Patty</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Link Sausage</h6>
                            </div>
                        </td>
                    </tr>
                
                    <tr> 
                        <td>
                            <div>
                                <h6>Corn Beef</h6>
                            </div>
                        </td>  
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Salmon Patty</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Grits</h6>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <div>
                                <h6>Hash Brown</h6>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default BreakfastMenu;