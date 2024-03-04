function FaqSelect({ faqSection, onHandleSetFaq }) {
  return (
    <select
      className="my-4 max-w-xs cursor-pointer rounded border border-teal-400 
        bg-slate-800 p-2 text-center font-semibold capitalize tracking-wide 
        text-slate-300 focus:border-purple-400 focus:outline-none"
      name="faq"
      id=""
      defaultValue={faqSection}
      onChange={(e) => onHandleSetFaq(e)}
    >
      <option value="general">general information</option>
      <option value="prohibited">allowed & prohibited items</option>
      <option value="ticketing">ticketing & line up</option>
      <option value="support">support & help</option>
    </select>
  );
}

export default FaqSelect;
