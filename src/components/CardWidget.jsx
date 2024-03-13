import cart from "../assets/carrito-white-png.png"
export const CardWidget = () => {
    return(
        <div>
        <img src={cart} alt="carrito" height={24} />
        <span>1312</span>
        </div>
    );
};