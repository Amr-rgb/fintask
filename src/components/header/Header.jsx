import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="container mx-auto px-4 py-6 rounded-3xl bg-white">
      <div className="flex items-center">
        <div className="w-32 md:w-36 lg:w-auto">
          <Link to="/">
            <img src="/assets/logo.svg" alt="logo" />
          </Link>
        </div>

        <nav className="hidden ml-20 md:block">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li>
              <Link to="/integration">Integration</Link>
            </li>
          </ul>
        </nav>

        <button className="ml-auto btn py-[15px] px-[30px] font-bold">
          Join Free
        </button>
      </div>
    </header>
  );
};
