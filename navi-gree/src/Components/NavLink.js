import { Link } from 'react-router-dom';

const NavLink = ({ href, title }) => (
  <Link to={href} className="text-white hover:text-slate-400 text-xl">
    {title}
  </Link>
);

export default NavLink;
