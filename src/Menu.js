import recipes from "./recipes.js" ;
import swal from "sweetalert2" ;


const Menu = () =>{
    
    
    const handleOrder=(id) =>{
        console.log(id,"id is clicked");
        swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton:true,
            confirmButtonColor:"#3085d6",
            cancelButtonColor:"#d33",
            confirmButtonText: "Yes, order it!"
        }).then((result) =>{
            if(result.isConfirmed){
                swal.fire(
                    "Order!",
                    "Your order has been processing.",
                    "success"
                )
            }
        } )
    }

    return(
        <div className="menu-container" >
             <div  className="menu-header">
                <h2 className="title"> This weeks specials! </h2>
                <button > Online Menu </button>
             </div>
             <div className="cards">
                {
                    recipes.map(recipe => <div key={recipe.id} className="menu-items" >
                     <img src={recipe.image} alt="recipe"/>
                      <div className="menu-content" >
                        <div className="heading">
                            <h4> {recipe.title} </h4>
                            <p> {recipe.price} $ </p>
                        </div>
                        <p> {recipe.description} </p>
                        <button className="orderBtn" onClick={() =>handleOrder(recipe.id) } > Order For Delivery </button>
                      </div>

                    </div> )
                }
             </div>
        </div>
    )
}

export default Menu;