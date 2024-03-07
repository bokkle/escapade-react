import { useEffect, useState } from 'react';
import CartPrice from './CartPrice';
import CartQuantity from './CartQuantity';
import TicketInfo from './TicketInfo';
import CartButtons from './CartButtons';

function CartContent() {
  const [numTickets, setNumTickets] = useState(1);
  const subtotal = numTickets * 350;

  const handleInc = () => {
    if (numTickets === 6) return;
    setNumTickets((num) => num + 1);
  };

  const handleDec = () => {
    if (numTickets === 1) return;
    setNumTickets((num) => num - 1);
  };

  return (
    <div className="flex-1 p-4">
      <TicketInfo />
      <CartQuantity
        onHandleInc={handleInc}
        onHandleDec={handleDec}
        numTickets={numTickets}
      />
      <CartPrice numTickets={numTickets} subtotal={subtotal} />
      <CartButtons />
    </div>
  );
}

export default CartContent;
