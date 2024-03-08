import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm';
import Spinner from '../ui/Spinner';
import ThankYou from './ThankYou';
// :)

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    )
      return;
    setIsLoading(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setIsLoading(false);
      setThankYou(true);
    }, 2000);
  };
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div
        className="h-[500px] min-h-[454px] w-full max-w-3xl rounded-xl bg-gradient-to-br 
      from-indigo-500 via-cyan-300 to-pink-300 p-1"
      >
        <div className="flex h-full flex-col rounded-lg bg-slate-900 p-8">
          {!isLoading && !thankYou && (
            <FontAwesomeIcon
              icon={faEnvelope}
              className="mb-5 text-5xl text-pink-300"
            />
          )}
          {/* {isLoading && !thankYou ? (
            <Spinner />
          ) : !thankYou ? (
            <ContactForm
              formData={formData}
              onHandleChange={handleChange}
              onHandleSubmit={handleSubmit}
            /> 
          ) : : <ThankYou />} */}
          {!isLoading && !thankYou ? (
            <ContactForm
              formData={formData}
              onHandleChange={handleChange}
              onHandleSubmit={handleSubmit}
            />
          ) : isLoading && !thankYou ? (
            <Spinner />
          ) : (
            <ThankYou />
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
