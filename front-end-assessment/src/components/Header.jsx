import logo from "../assets/icons/creditOneLogo.svg";

const Header = (props) => {
  return (
    <div className="bg-credit-one-blue w-full h-88 flex flex-row items-center justify-center py-3.5 px-236 box-border absolute">
      <img className="flex justify-center" alt="" src={logo} />
    </div>
  );
};

export default Header;
