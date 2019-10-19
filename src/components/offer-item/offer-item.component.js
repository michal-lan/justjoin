import React from 'react';

import { Link } from 'react-router-dom';

import './offer-item.styles.scss';

const OfferItem = ({ offer }) => (
    <li className='offer'>
        <Link to={`/offers/${offer.id}`}>
            <div className='company-logo-container'>
                <img src={ offer.company_logo_url } alt='logo' className='company-logo' />
            </div>
            <div className='details'>
                <p>
                    <b>{ offer.title }</b>

                    <span className='price'>{ offer.salary_from } - { offer.salary_to } { (offer.salary_currency !== null) ? offer.salary_currency.toUpperCase() : '' }</span>
                </p>
                <p>
                    { offer.company_name } - { offer.city }{ offer.street ? `, ${offer.street}` : '' }
                </p>
            </div>
        </Link>
    </li>
);

export default OfferItem;