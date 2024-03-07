import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VoltageButton from '../ui/VoltageButton';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

function CartButtons() {
  return (
    <div>
      <div className="mt-8 flex flex-col items-center">
        <VoltageButton>Checkout</VoltageButton>
      </div>
      <div className="mt-2 flex justify-end">
        <button className="capitalize text-red-500 hover:text-red-400 flex items-center gap-1">
          empty bag <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}

export default CartButtons;
