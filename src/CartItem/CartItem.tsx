import Button from "@material-ui/core/Button";
import Delete from "@material-ui/icons/Delete";
import { CartItemType } from "../App";
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({
  item,
  addToCart,
  removeFromCart,
  deleteFromCart,
}) => (
  <Wrapper>
    <div>
      <h3>{item.name}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => deleteFromCart(item.id)}
        >
          <Delete />
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.name} />
  </Wrapper>
);

export default CartItem;
