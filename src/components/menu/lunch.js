import React from "react"




const pStyle = {
    fontSize: '.8rem'
}

const hrStyle = {
    border: "solid",
    width: "75%",
}

const tableStyle = {
    marginTop: "100px"
}


function LunchMenu() {
    return (
        <div style={tableStyle}>
        <h2>LUNCH</h2>
            <hr style={hrStyle}></hr>
            <p style={pStyle}>Welcome! We are excited you have chosen to dine with us today. Take a monent to look through our new menu and see what looks tasty to you.Enjoy!</p>
            <p>Served 11am - 3pm</p>
            <p style={pStyle}>(All meals include hush puppies or a dinner roll and your choice of one side.) Add a premium side for one dollar.</p>
        <table borderless responsive>  
        <thead></thead>
            
        <tbody>
            
            <tr> 
            
            <td>
                <div>
                    <h6>Snapper/King</h6>
                </div>
            </td>  
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
           
            <td>
                <div>
                    <h6>Pork Chop</h6>
                </div>
            </td>
            </tr>

            

            
        </tbody>
        </table>
            <h2>$5 Lunch Specials</h2>
            <hr style={hrStyle}></hr>
            <p style={pStyle}>Served Tuesday - Friday</p>
            <p style={pStyle}>(All lunch specials include fries and a drink.)<br></br>No Substitutions</p>
        <table borderless responsive> 
        <thead>
            <tr>
            
            </tr>
        </thead> 
        <tbody>
            
            <tr> 
            
            <td>
                <div>
                    <h6>Bojo Burger</h6>
                </div>
            </td>  
            
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
           
            <td>
                <div>
                    <h6>BLT</h6>
                </div>
            </td>
            </tr>
        </tbody>
        </table>
      
        
        <table borderless responsive>  
        <thead>
            <tr>
            <th><h2>Seafood Only Specials</h2><hr style={hrStyle}></hr></th>
            <th><h2>Chicken Only Specials (Breaded or Unbreaded)</h2><hr style={hrStyle}></hr></th>
            </tr>
        </thead>
        <tbody>
            
            <tr> 
            
            <td>
                <div>
                    <h6>Snapper/King/Cat (sm or lg)</h6>
                </div>
            </td>  
            
            <td>
                <div>
                    <h6>Chicken Wings (3,5,10)</h6>
                </div>
            </td>
            </tr>

            <tr>              
            <td>
                <div>
                    <h6>Fish of the Day</h6>
                </div>
            </td>
           
            <td>
                <div>
                    <h6>Hot Wings (10,20,50)</h6>
                </div>
            </td>
            </tr>
        
            <tr> 
            
            <td>
                <div>
                    <h6>Shrimp Only (sm or lg)</h6>
                </div>
            </td>  
            
            <td>
                <div>
                    <h6>Buffalo / Honey Mustard / BBQ </h6>
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

        <table borderless responsive>  
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

        <table borderless responsive>  
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