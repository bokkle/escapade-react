function CartPrice({ subtotal }) {
  const fees = subtotal ? 36.15 : 0;
  const delivery = subtotal ? 10.95 : 0;
  const taxes = (subtotal + fees + delivery) * 0.13;
  const total = (subtotal + fees + delivery + taxes).toFixed(2);

  return (
    <div className="">
      <h1
        className="mb-2 text-xl font-semibold capitalize 
      tracking-wide text-slate-200"
      >
        summary
      </h1>
      <div className="flex justify-between">
        <p className="capitalize text-slate-200">subtotal</p>
        <span className="tracking-wide text-slate-200">
          ${subtotal.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between">
        <p className="capitalize text-slate-200">fees</p>
        <span className="tracking-wide text-slate-200">
          {subtotal ? '$' + fees : '-'}
        </span>
      </div>
      <div className="flex justify-between">
        <p className="capitalize text-slate-200">delivery</p>
        <span className="tracking-wide text-slate-200">
          {subtotal ? '$' + delivery : '-'}
        </span>
      </div>
      <div className="flex justify-between border-b border-purple-300 pb-1">
        <p className="capitalize text-slate-200">taxes</p>
        <span className="tracking-wide text-slate-200">
          {subtotal ? '$' + taxes.toFixed(2) : '-'}
        </span>
      </div>
      <div className="flex justify-between border-b border-purple-300 py-1">
        <p className="capitalize text-orange-300">total</p>
        <span className="tracking-wide text-orange-300">${total}</span>
      </div>
    </div>
  );
}

export default CartPrice;
