import CartContent from './CartContent';

function Cart() {
  return (
    <div className="flex justify-center">
      <div
        className="max-w-3xl flex-1 rounded-xl bg-gradient-to-br from-indigo-500
    via-cyan-300 to-pink-300 p-2"
      >
        <div className="flex h-full flex-col rounded-lg bg-slate-900 p-3">
          <h1 className="text-3xl font-bold uppercase tracking-wide text-pink-300">
            bag
          </h1>
          <CartContent />
        </div>
      </div>
    </div>
  );
}

export default Cart;
