import React from "react";

const Sidebar = () => {
  return (
    <section className="sidebar-section">
      <div className="my-sidebar">
        <div className="sidebar-header-block">
          <div className="d-flex align-items-center">
            <ion-icon name="menu" style={{ fontSize: "20px" }}></ion-icon>
            <div className="d-flex flex-column pl-2">
              <div style={{ fontWeight: 900, fontSize: "15px" }}>
                Evision Web Services
              </div>
              <div
                style={{ fontSize: "10px", color: "#3273a5", fontWeight: "600" }}
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
              <div>Agents</div>
            </div>
            <div className="sidebar-submenu">
              <a
                className="sidebar-submenu-item"
                asp-action="ViewAgents"
                asp-controller="Agents"
              >
                View Agents
              </a>
              <a
                className="sidebar-submenu-item"
                asp-action="ConfigureAgent"
                asp-controller="Agents"
              >
                Configure Slave Node
              </a>
              <a
                className="sidebar-submenu-item"
                asp-action="EditSlaveNodes"
                asp-controller="Agents"
              >
                Edit Nodes
              </a>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Deployment Artifacts</div>
            </div>
            <div className="sidebar-submenu">
              <a
                className="sidebar-submenu-item"
                asp-action="ListArtifacts"
                asp-controller="Artifacts"
              >
                List Artifacts
              </a>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Manage DNS Records</div>
            </div>
            <div className="sidebar-submenu">
              <a className="sidebar-submenu-item">Add new DNS Record</a>
              <a className="sidebar-submenu-item">List DNS Records</a>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Monitoring</div>
            </div>
            <div className="sidebar-submenu">
              <a
                className="sidebar-submenu-item"
                asp-action="NodesMonitoring"
                asp-controller="Monitoring"
              >
                Nodes Health Monitoring
              </a>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Deployment</div>
            </div>
            <div className="sidebar-submenu">
              <a
                className="sidebar-submenu-item"
                asp-action="DeploymentPipeline"
                asp-controller="Deployment"
              >
                Deploy a system
              </a>
              <a className="sidebar-submenu-item">Manage Deployments</a>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Backups</div>
            </div>
            <div className="sidebar-submenu">
              <a className="sidebar-submenu-item">DB Backups</a>
              <a className="sidebar-submenu-item">Restore Backups</a>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>IAM</div>
            </div>
            <div className="sidebar-submenu">
              <a
                className="sidebar-submenu-item"
                asp-action="ListUsers"
                asp-controller="Administration"
              >
                IAM Users
              </a>
              <a
                className="sidebar-submenu-item"
                asp-action="ListRoles"
                asp-controller="Administration"
              >
                IAM Roles
              </a>
            </div>
          </div>

          <div className="sidebar-menu-item">
            <div className="sidebar-menu-item-heading">
              <ion-icon name="caret-down"></ion-icon>
              <div>Setup and Install</div>
            </div>
            <div className="sidebar-submenu">
              <a className="sidebar-submenu-item">Installation Guide</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
