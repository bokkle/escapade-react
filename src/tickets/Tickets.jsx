import Ticket from './Ticket';

function Tickets() {
  const admission = ['general', 'vip'];

  return (
    <div className="flex-1">
      <h1 className="mb-4 text-center text-3xl uppercase text-pink-300 font-bold tracking-wide">
        Tickets
      </h1>
      <div
        className="flex flex-wrap justify-center gap-6 
      py-8 text-slate-100"
      >
        {admission.map((el, i) => (
          <Ticket key={i}>{el}</Ticket>
        ))}
      </div>
    </div>
  );
}

export default Tickets;
