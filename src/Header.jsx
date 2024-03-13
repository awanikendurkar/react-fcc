import logo from "./assets/react.svg";

export default function Header() {
  return (
    <header>
      <nav className='nav'>
        <img src={logo} alt='The React logo' className='react-logo' />
        <ul className='nav-items'>
          <li className='nav-item'>Pricing</li>
          <li className='nav-item'>About</li>
          <li className='nav-item'>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
