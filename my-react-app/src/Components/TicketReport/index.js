import React from 'react';
import './index.css';

const TicketReport = () => (
    <div className='ticket-report'>
        <form>
            <div className='ticket-form'>
                <div className='form-group'>
                    <input type='radio' name='ticket-type' id='fresh-disbursement' />
                    <label htmlFor='fresh-disbursement'>Fresh Disbursement</label>
                </div>
                <div className='form-group'>
                    <input type='radio' name='ticket-type' id='rollover' />
                    <label htmlFor='rollover'>Rollover</label>
                </div>
            </div>
            <div className='report-and-contact'>
                <div className='report-section'>
                    <div className='field-section'>
                        <label htmlFor='report'>Report</label>
                        <textarea id='report' className='report-textarea'></textarea>
                    </div>
                    <div className='ticket-checkbox'>
                        <div>
                            <input type='checkbox' id='annexure' />
                            <label htmlFor='annexure'>Annexure II to circular (Fx/182019)</label>
                        </div>
                        <div>
                            <input type='checkbox' id='rollover-letter' />
                            <label htmlFor='rollover-letter'>Rollover Sanction letter</label>
                        </div>
                        <div>
                            <input type='checkbox' id='sanction-letter' />
                            <label htmlFor='sanction-letter'>Sanction Letter</label>
                        </div>
                    </div>
                </div>
                <div className='contact-us-section'>
                    <h2 className='heading'>Formats download Link and Link to Ratex</h2>
                    <address>Contact Us - </address>
                    <p>Announcement (Shown Below)</p>
                </div>
            </div>
            <div className='ticket-buttons'>
                <button type='submit' className='button button-submit'>Submit</button>
                <button type='button' className='button button-cancel'>Cancel</button>
            </div>
        </form>
    </div>
);

export default TicketReport;


