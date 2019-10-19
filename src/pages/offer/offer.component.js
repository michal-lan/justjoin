import React from 'react';

import { Link } from 'react-router-dom';

import './offer.styles.scss';

const JSON_URL = 'https://test.justjoin.it/offers';

class OfferPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            offer: []
        }

        this.offer = this.props.match.params.id;
    }

    async componentDidMount() {
        await fetch(JSON_URL)
          .then(response => response.json())
          .then(data => {
            if ( data.length > 0 ) {
                const selectOfferFromJson = data.filter((offer) => offer.id === this.offer )[0];
                this.setState({ offer: selectOfferFromJson, isLoading: false });
            } else {
                this.setState({ isLoading: false });
            }
        });
    }

    render() {
        const { isLoading, offer } = this.state;

        return (
            <div className='offer-page'>
                { isLoading ? (
                    <div className='loading-info'> Ładuję ofertę... </div>
                ) : (
                    <div>
                        <Link to='/' className='backToHome'>&#8249; Wróć do strony głównej</Link>

                        { offer.length !== 0 ? (
                            <div>
                                <div className='offer-header'>
                                    <div className='company-logo-container'>
                                        <img src={ offer.company_logo_url } alt='logo' className='company-logo' />
                                    </div>
                                    <div className='details'>
                                        <p>
                                            <span className='price'>{ offer.salary_from } - { offer.salary_to } { (offer.salary_currency !== null) ? offer.salary_currency.toUpperCase() : '' }</span>
                                        </p>
                                        <p>
                                            <b>{ offer.title }</b>
                                        </p>
                                        <p>
                                            { offer.city }{ offer.street ? `, ${offer.street}` : '' }
                                        </p>
                                    </div>
                                </div>
                                <ul className='more-info-boxes'>
                                    { offer.company_name ? 
                                        <li>
                                            <p>Company name</p>
                                            {offer.company_name}
                                        </li>
                                    : '' }
                                    { offer.company_size ? 
                                        <li>
                                            <p>Company size</p>
                                            {offer.company_size}
                                        </li>
                                    : '' }
                                    { offer.employment_type ? 
                                        <li>
                                            <p>EMP. type</p>
                                            {offer.employment_type}
                                        </li>
                                    : '' }
                                    { offer.experience_level ? 
                                        <li>
                                            <p>EXP. lvl</p>
                                            {offer.experience_level}
                                        </li>
                                    : '' }
                                    { offer.remote ? 
                                        <li>
                                            <p>Remote?</p>
                                            { offer.remote ? 'remote' : 'Not Remote'}
                                        </li>
                                    : '' }
                                </ul>
                            </div>
                        ) : 'Błąd ładowania oferty, za utrudnienia przepraszamy.' }
                    </div>
                )}
            </div>
        );
    }
};

export default OfferPage;