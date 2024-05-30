import React from 'react';
import TicketHeader from '../TicketHeader';
import TicketReport from '../TicketReport';
import './index.css';

const RaiseTicket = () => (
    <div className='ticket-raise-container'>
        <TicketHeader />
        <h2 className='ticket-raise-title'>Raise a New Ticket</h2>
        <TicketReport />
        
    </div>
);

export default RaiseTicket;

