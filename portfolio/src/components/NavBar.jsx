import { List, Moon, Sun } from "phosphor-react";

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
              <List size={32} />
            </button>
          </div>
          <div className="noscript-hidden hidden lg:block">
            <button className="border-secondary hover:border-primary focus:primary focus:outline inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 p-1 transition w-14">
              <Moon size={32} />
            </button>
          </div>
          <a
            href="/"
            className="focus:outline ml-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-secondary hover:border-primary transition"
          >
            <img
              className="inline w-full h-full select-none rounded-full object-cover"
              src="perfil.jpg"
              alt="photo perfil Gustavo Fernandes"
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
