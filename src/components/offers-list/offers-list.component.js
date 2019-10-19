import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentFilter } from '../../redux/filter/filter.selectors';

import OfferItem from '../offer-item/offer-item.component';

import './offers-list.styles.scss';

const JSON_URL = 'https://test.justjoin.it/offers';

class OffersList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            offers: [],
            limitToShow: -1
        }
    }

    async componentDidMount() {
        await fetch(JSON_URL)
          .then(response => response.json())
          .then(data => this.setState({ offers: data, isLoading: false }));
    }

    render() {
        const { isLoading, offers } = this.state;

        const offersAfterFilter = offers
            .slice(0, this.state.limitToShow)
            .filter((offer) => (
                this.props.currentFilter === 'all' || 
                typeof this.props.currentFilter === 'undefined' ||
                this.props.currentFilter === null ? 
                    offer
                : 
                    offer.marker_icon === this.props.currentFilter 
                ));

        return (
            <div className='offers-list'>
                { isLoading ? (
                    <div className='loading-info'> Ładuję oferty... </div>
                ) : ( offersAfterFilter.length > 0 ? (
                    <ul className='list'>
                        { offersAfterFilter.map((offer, key) => <OfferItem key={key} offer={offer} /> ) }
                    </ul>
                ) : (
                    <div className='empty-offers'>Brak ofert, wróć do nas później</div>
                ))}
            </div>
        );
    }
};

const mapStateToProps = createStructuredSelector({
    currentFilter: selectCurrentFilter
});

export default connect(
    mapStateToProps
)(OffersList);