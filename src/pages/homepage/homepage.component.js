import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setCurrentFilter } from '../../redux/filter/filter.actions';
import { selectCurrentFilter } from '../../redux/filter/filter.selectors';

import { Link } from 'react-router-dom';

import FiltersList from '../../components/filters-list/filters-list.component';
import OffersList from '../../components/offers-list/offers-list.component';

import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.filterId = props.match.params.filterId;
        this.setCurrentFilter = this.props.setCurrentFilter;
    }

    componentDidMount() {
        if ( typeof this.filterId === 'undefined' ) {
            this.setCurrentFilter('all');
        } else if ( this.filterId !== this.props.currentFilter ) {
            this.setCurrentFilter(this.filterId);
        }
    }

    render() {
        return (
            <div className='homepage'>
                <div className='header'>
                    <Link to='/'>MiniJustJoinIT</Link>
                </div>
                <div className='content'>
                    <FiltersList />
                    <OffersList />
                </div>
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
)(HomePage);