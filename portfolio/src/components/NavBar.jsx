import { List } from "phosphor-react";

const NavBar = () => {
  return (
    <div className="px-5vw py-9 lg:py-12">
      <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div>
          <a
            className="text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition"
            href="/"
          >
            <h1>Gustavo F. Costa</h1>
          </a>
        </div>
        <ul className="hidden lg:flex">
          <li className="px-5 py-2">
            <a className="linkNav" href="#">
              Quem sou
            </a>
          </li>
          <li className="px-5 py-2">
            <a className="linkNav" href="#">
              O que faço
            </a>
          </li>
          <li className="px-5 py-2">
            <a className="linkNav" href="#">
              Portfólio
            </a>
          </li>
          <li className="px-5 py-2">
            <a className="linkNav" href="#">
              Fale comigo
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center">
          <div className="block lg:hidden">
            <button className="focus:border-primary hover:border-primary border-secondary text-primary focus:outline-none inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition">
              <List size={32} weight="bold" />
            </button>
          </div>
          <div className="hidden lg:block"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
