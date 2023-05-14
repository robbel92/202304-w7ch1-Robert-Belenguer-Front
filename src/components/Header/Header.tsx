import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1 className="title">The Best Robots</h1>

      <img
        src="favicon.ico"
        alt="robot levantando las manos"
        width={150}
        height={150}
      />
    </HeaderStyled>
  );
};

export default Header;
