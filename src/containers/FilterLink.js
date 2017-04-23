import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) =>{
  	  // console.log("ownProps in filter",ownProps)
  	  return {
			onClick: () => {
			    dispatch(setVisibilityFilter(ownProps.filter))
			}
  	  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)


const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
