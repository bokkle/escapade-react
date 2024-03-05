import VoltageButton from '../ui/VoltageButton';
import Price from './Price';

function Ticket({ children }) {
  return (
    <div
      className="h-96 w-full max-w-96 rounded-xl bg-slate-800 
  bg-gradient-to-br from-indigo-500 via-cyan-300 to-pink-300 p-2"
    >
      <div
        className="flex h-full flex-col items-center justify-between rounded-lg 
      bg-slate-900 p-8"
      >
        <div
          className="border-b border-cyan-300 pb-2 
        text-center text-slate-200"
        >
          <h1 className="text-2xl font-bold uppercase tracking-wide text-teal-300">
            {children}
          </h1>
          <h3 className="capitalize text-slate-200">weekend admission</h3>
        </div>
        <div className="border-b border-pink-300 pb-4 text-center">
          <p className="capitalize text-slate-200">{children === 'general' ? 'Festival access' : 'Fast lane access'}</p>
          <p className="capitalize text-slate-200">{children === 'general' ? '' : 'VIP sections' }</p>
          <p className="capitalize text-slate-200">{children === 'general' ? '16+ only' : '19+ only'}</p>
        </div>
        {children === 'general' ? <Price>$350</Price> : <Price>$550</Price>}
        <VoltageButton>buy now</VoltageButton>
      </div>
    </div>
  );
}

export default Ticket;
