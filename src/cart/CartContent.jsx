import CartQuantity from './CartQuantity';
import TicketInfo from './TicketInfo';

function CartContent() {
  return (
    <div className="flex-1 border p-4">
      <TicketInfo />
      <CartQuantity />
    </div>
  );
}

export default CartContent;
