import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-red-200 text-1xl py-4">
      <div className="container mx-auto px-5">
        <nav>
          <ul className="flex gap-x-8 justify-center">
            <li className="bg-orange-300 rounded-md transition-color has-[a.active]:bg-orange-400 duration-150 hover:bg-orange-400">
              <NavLink to="/" className="flex p-2">
                Main page
              </NavLink>
            </li>
            <li className="bg-orange-300 rounded-md transition-color has-[a.active]:bg-orange-400 duration-150 hover:bg-orange-400">
              <NavLink to="/about" className="flex p-2">
                About page
              </NavLink>
            </li>
            <li className="bg-orange-300 rounded-md transition-color duration-150 has-[a.active]:bg-orange-400 hover:bg-orange-400">
              <NavLink to="/contact" className="flex p-2">
                Contact page
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
