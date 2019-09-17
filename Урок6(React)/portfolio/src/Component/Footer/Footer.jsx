import React from "react";

const styleFooter = {
  backgroundColor: "#1d809f",
  color: "#fff"
};
class Footer extends React.PureComponent {
  render() {
    return (
      <footer style={styleFooter} className="page-footer font-middle black">
        <div className="footer-copyright text-center py-3">
          {this.props.footer}
        </div>
      </footer>
    );
  }
}

export default Footer;
