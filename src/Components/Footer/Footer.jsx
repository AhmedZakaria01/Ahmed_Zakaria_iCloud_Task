import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed-bottom text-center m-0 py-2 bg-slate-100 ">
      <p className="m-0">
        Got question ? take a look at our
        <Link className="no-underline"> FAQs </Link> , talk to us on Twitter
        <Link className="no-underline"> @Company </Link>
        or send an email to
        <Link className="no-underline"> team@company.com</Link>
      </p>
    </footer>
  );
}

export default Footer;
