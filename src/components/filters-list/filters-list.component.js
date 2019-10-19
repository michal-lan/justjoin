import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentFilter } from '../../redux/filter/filter.actions';
import { selectCurrentFilter } from '../../redux/filter/filter.selectors';

import history from '../../history';

import './filters-list.styles.scss';

class FiltersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filters: [
                'all', 'php', 'c', 'javascript'
            ]
        }

        this.setCurrentFilter = this.props.setCurrentFilter;
    }

    handleClick = ( filter ) => {
        this.setCurrentFilter(filter);
        history.push(`/all/${filter}`);
    }

    render() {
        const { filters } = this.state;

        return (
            <div className='filters-list'>
                { filters.map((filter, key) => (
                    <button 
                        key={key} 
                        onClick={() => this.handleClick(filter)} 
                        className={`button ${ filter === this.props.currentFilter ? 'active' : '' }`}
                    >{ filter.toUpperCase() }</button>
                ))}
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    currentFilter: selectCurrentFilter
});

const mapDispatchToProps = dispatch => ({
    setCurrentFilter: item => dispatch(setCurrentFilter(item)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FiltersList);