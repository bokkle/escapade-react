import VoltageButton from '../ui/VoltageButton';

function ContactForm({ formData, onHandleChange, onHandleSubmit }) {
  return (
    <form
      action="POST"
      className="flex flex-col gap-2 text-slate-200"
      onSubmit={(e) => onHandleSubmit(e)}
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => onHandleChange(e)}
        className={`rounded border border-teal-300 bg-slate-900 p-2 
              focus:border-purple-400 focus:outline-none`}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => onHandleChange(e)}
        className={`rounded border border-teal-300 bg-slate-900 p-2 
              focus:border-purple-400 focus:outline-none`}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone number"
        value={formData.phone}
        onChange={(e) => onHandleChange(e)}
        className={`rounded border border-teal-300 bg-slate-900 p-2 
              focus:border-purple-400 focus:outline-none`}
      />
      <textarea
        name="message"
        placeholder="Write your message here..."
        value={formData.message}
        onChange={(e) => onHandleChange(e)}
        className={`h-20 resize-none text-pretty rounded border border-teal-300 bg-slate-900 
              p-2 focus:border-purple-400 focus:outline-none`}
      />
      <div className="mt-6 flex justify-center">
        <VoltageButton type="submit">Send</VoltageButton>
      </div>
    </form>
  );
}

export default ContactForm;
