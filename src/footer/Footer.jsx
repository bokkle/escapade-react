import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faXTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer
      className="bottom-0 flex w-full shrink-0 flex-col 
    items-center justify-around bg-stone-950 py-4 mt-3"
    >
      <div className="mb-3 flex gap-3">
        <FontAwesomeIcon
          icon={faInstagram}
          className="cursor-pointer text-3xl text-[#C13584] transition-transform 
          duration-100 hover:scale-95"
        />
        <FontAwesomeIcon
          icon={faXTwitter}
          className="mx-3 cursor-pointer text-3xl text-slate-200 transition-transform 
          duration-100 hover:scale-95"
        />
        <FontAwesomeIcon
          icon={faFacebook}
          className="cursor-pointer text-3xl text-[#4267B2] transition-transform 
          duration-100 hover:scale-95"
        />
      </div>
      <p className="text-slate-400">
        Copyright &copy; {new Date().getFullYear()} Escapade
      </p>
      <p className="text-slate-400">
        Developed by{' '}
        <span className="cursor-pointer underline hover:no-underline">
          Roseway
        </span>
      </p>
    </footer>
  );
}

export default Footer;
