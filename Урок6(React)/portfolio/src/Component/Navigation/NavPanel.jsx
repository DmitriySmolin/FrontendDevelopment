import React from "react";

class NavPanel extends React.PureComponent {
  render() {
    const { navLinks } = this.props;
    return (
      <li>
        <a href={"#" + navLinks}>{navLinks}</a>
      </li>
    );
  }
}
export default NavPanel;
