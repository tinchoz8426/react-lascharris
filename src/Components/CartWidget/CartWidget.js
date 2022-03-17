import "./CartWidget.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../Context/CartContext";

const CartWidget = () => {
  const { cartWidgetItems } = useCart();
  return (
    <div className="carrito">
      <ShoppingCartIcon
        fontSize="large"
        // component={Link}
        // to="/cart"
        // color="inherit"
      />
      {cartWidgetItems() === 0 ? null : (
        <div className="">{cartWidgetItems()}</div>
      )}
    </div>
  );
};
export default CartWidget;
