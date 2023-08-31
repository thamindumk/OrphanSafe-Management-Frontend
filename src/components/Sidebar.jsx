import React from "react";
import { LinkContainer } from "react-router-bootstrap";

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <div className="my-sidebar">
        <div className="sidebar-header-block">
          <div className="d-flex align-items-center">
            <ion-icon name="menu" style={{ fontSize: "20px" }}></ion-icon>
            <div className="d-flex flex-column pl-2">
              <div style={{ fontWeight: 900, fontSize: "15px" }}>
                OrphanaSafe
              </div>
              <div
                style={{
                  fontSize: "10px",
                  color: "#3273a5",
                  fontWeight: "600",
                }}
              >
                Tell us what you think
              </div>
            </div>
          </div>
          <ion-icon name="close" style={{ fontSize: "20px" }}></ion-icon>
        </div>
        <div className="sidebar-menu-block">
          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Dashboard</div>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/dashboard">
                <a className="sidebar-submenu-item">View Dashboard</a>
              </LinkContainer>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Monitoring</div>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/dashboard">
                <a className="sidebar-submenu-item">Orphanage staff</a>
              </LinkContainer>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/dashboard">
                <a className="sidebar-submenu-item">Social Workers</a>
              </LinkContainer>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/dashboard">
                <a className="sidebar-submenu-item">Parent</a>
              </LinkContainer>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Child Profile</div>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/dashboard">
                <a className="sidebar-submenu-item">Create profile</a>
              </LinkContainer>
            </div>
            <div className="sidebar-submenu">
              <LinkContainer to="/dashboard">
                <a className="sidebar-submenu-item">View Profiles</a>
              </LinkContainer>
            </div>
            <div className="sidebar-menu-item">
              <div className="sidebar-menu-item-heading">
                <ion-icon name="caret-down"></ion-icon>
                <div>Legal</div>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Child documents</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Staff documents </a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">
                    Social workers documents{" "}
                  </a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Parent documents </a>
                </LinkContainer>
              </div>
            </div>
            <div className="sidebar-menu-item">
              <div className="sidebar-menu-item-heading">
                <ion-icon name="caret-down"></ion-icon>
                <div>cases</div>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Ongoin cases</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Pending cases</a>
                </LinkContainer>
              </div>
            </div>
            <div className="sidebar-menu-item">
              <div className="sidebar-menu-item-heading">
                <ion-icon name="caret-down"></ion-icon>
                <div>Reports</div>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Child reports</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Financial reports</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Staff reports</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">External party reports</a>
                </LinkContainer>
              </div>
            </div>
            <div className="sidebar-menu-item">
              <div className="sidebar-menu-item-heading">
                <ion-icon name="caret-down"></ion-icon>
                <div>User roles</div>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Create Staff</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Create parent</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Create social worker</a>
                </LinkContainer>
              </div>
              <div className="sidebar-submenu">
                <LinkContainer to="/dashboard">
                  <a className="sidebar-submenu-item">Edid and delete roles</a>
                </LinkContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
