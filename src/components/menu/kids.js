import React from "react"
// import Hero from "../hero"
import image3 from '../../images/image3.jpg'


const tableStyle = {
    marginTop: "60px",
    display: "grid",
    margin: "auto 10%"
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
            {/* <Hero section={'Kids Menu'}/> */}
            <div class="top-display-km">
                <div class="top-text bye" id="content-1">
                    <h1 class="primary-head">Kid's Menu</h1>
                </div>
                <h1><img src={image3} alt="" class="ABimage" /></h1>
            </div>
            <table className='table-item-1'>  
            <thead>
                <tr>
                    <h2></h2>
                    <hr style={hrStyle}></hr>
                    <p style={pStyle}>(Kids Meal include Fries and a Drink)</p>
                </tr>
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