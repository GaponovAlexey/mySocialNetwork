import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { OneR } from "../../Redux/verska-reducer";



class OneContainer extends React.Component {
	render() {
		return (
			<>
			</>
		)
	}
}
const mapStateToProps = (state) => ({
	one: state.oneR.count,

})


export default compose(
	withRouter,
	connect(mapStateToProps, {  ,  })
)(
	OneContainer
)