import { Link } from 'react-router-dom';

const MenuOverlay = ({ links }) => (
    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center">
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path} className="text-white text-2xl">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
  
  export default MenuOverlay;
  