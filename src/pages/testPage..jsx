import { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { getApprovisionnements } from './api'; // Import your API function

function ApproTailleurPage() {
  const [approvisionnements, setApprovisionnements] = useState([]);
  const [filterLibelle, setFilterLibelle] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getApprovisionnements(filterLibelle);
      if (result.error) {
        console.error('Error fetching data:', result.error);
      } else {
        setApprovisionnements(result);
      }
    };

    fetchData();
  }, [filterLibelle]);

  return (
    <>
                       <div className="left-header">
                            <div className="header-inner">
                                <img className="avatar" src="assets/img/vector/icons/logos/store.svg" alt="image"/>
                                <div className="separator"></div>
                                <div className="title-wrap">
                                    <h3 className="payment-title">Pay your order</h3>
                                    <p className="payment-subtitle">Enter your credit card information</p>
                                </div>
                            </div>
                            <div className="header-coupon">
                                <div className="field is-grouped">
                                    <div className="control">
                                        <input type="text" className="input" placeholder="Gift card or discount code"/>
                                    </div>
                                    <div className="control">
                                        <button className="button is-solid primary-button raised">
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="header-foot">
                                <span className="label">Total</span>
                                <span className="amount" data-currency="USD">$216.92</span>
                            </div>
                        </div>


                        
    </>
  );
}

export default ApproTailleurPage;
