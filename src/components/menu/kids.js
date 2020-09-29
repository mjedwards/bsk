import React from "react"


const tableStyle = {
    marginTop: "100px"
}


const pStyle = {
    fontSize: '.8rem'
}

const hrStyle = {
    border: "solid",
    width: "75%",
}

function KidsMenu() {
    return (
        <div style={tableStyle}>
            <h2>Kids Meals</h2>
            <hr style={hrStyle}></hr>
            <p style={pStyle}>(Kids Meal include Fries and a Drink)</p>
             <table>  
        <thead>
        </thead>
        <tbody>
            
            <tr> 
            
            <td>
                <div>
                    <h6>Jr. Footlong</h6>
                </div>
            </td>  
    
            </tr>

            <tr>              
            <td>
                <div>
                    <h6>Bojo Sliders (2)</h6>
                </div>
            </td>
           
            </tr>

            <tr>
            <td>
                <div>
                    <h6>Grilled Cheese</h6>
                </div>
            </td>
           
            </tr>
        
            <tr> 
            
            <td>
                <div>
                    <h6>Chicken Strips (2)</h6>
                </div>
            </td>  
            </tr>

             <tr>
                <td>
                <div>
                    <h6>Fish Fingers (Tilapia)</h6>
                </div>
            </td>
            </tr>

           
        </tbody>
        </table>
        </div>
    )
}

export default KidsMenu;