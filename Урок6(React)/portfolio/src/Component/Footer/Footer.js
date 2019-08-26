import React, {Component} from 'react';

const styleFooter = {
	backgroundColor : 'rgba(0, 0, 0, .1)'
}
class Footer extends Component {
    render() {
        return (
		<footer style={styleFooter} className="page-footer font-middle black">
  			<div className="footer-copyright text-center py-3" >
    		{this.props.footer}
  			</div>
		</footer>
        );
    }
}

export default Footer;