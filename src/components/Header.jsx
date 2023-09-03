import { useSelector, useDispatch } from "react-redux";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall, { isLoading }] = useLogoutMutation();

  useEffect(() => {
    if (!userInfo) {
      navigate("/auth/login");
    }
  }, [navigate, userInfo]);

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      // change local state
      dispatch(logout());
      // navigate
      navigate("/auth/login");
    } catch (error) {
      toast.error("Error occured! Couldn't logout");
    }
  };

  return (
    <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src="/app-icon.png" alt="" />
        <div className="brand-title">OrphanSafe</div>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <div className="d-flex">
                <ion-icon
                  name="apps-sharp"
                  style={{ height: "24px", width: "24px" }}
                ></ion-icon>
                <div className="ml-2">Services</div>
              </div>
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <span className="navbar-text d-flex">
          <a className="nav-link" href="#">
            {userInfo ? userInfo.role : "Role: N/A"}
          </a>
          <LinkContainer to="/auth/login" onClick={logoutHandler}>
            <a className="nav-link">Logout</a>
          </LinkContainer>
        </span>
      </div>
    </Nav>
  );
};

export default Header;
