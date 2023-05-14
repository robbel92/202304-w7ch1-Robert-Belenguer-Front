import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1 className="title">The Best Robots</h1>

      <img
        src="favicon.ico"
        alt="robot raising its hands"
        width={75}
        height={75}
      />
    </HeaderStyled>
  );
};

export default Header;
