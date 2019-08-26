import React, {Component} from 'react';



class Footer extends Component {
    render() {
        return (
		<footer className="page-footer font-middle black">
  			<div className="footer-copyright text-center py-3">
    		{this.props.footer}
  			</div>
		</footer>
        );
    }
}

export default Footer;