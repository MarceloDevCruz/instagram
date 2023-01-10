// Bootstrap icons
import { BsSearch, BsList, BsX } from "react-icons/bs";

// Images
import logo from "../../assets/img/unsplashgram.png";

// hooks
import { useState, useCallback } from "react";
import { useAuthorization } from "../../hooks/useAuthorization";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout, reset } from "../../slices/authSlice";

// Components
import Sidebar from "../sidebar/Sidebar";

const NavBar = () => {
  const { auth } = useAuthorization();
  const { user } = useSelector((state) => state.auth);

  const [query, setQuery] = useState("");
  const [render, setRender] = useState(false);

  const onShow = useCallback(() => {
    render ? setRender(false) : setRender(true);
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <form className="header__form" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="search..."
          className="header__search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="header__button">
          <BsSearch />
        </button>
      </form>

      <button onClick={onShow}>
        {render ? (
          <BsX className="header__sidebar-close" />
        ) : (
          <BsList className="header__sidebar" />
        )}
      </button>
      {render && <Sidebar />}
    </header>
  );
};

export default NavBar;
