import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { SheetWrapper } from './Sheet.st'
import { Link } from 'react-router-dom'

const Sheet = () => {
  return (
    <SheetWrapper>
        <div className="navbar">
            <div className="navlink"><Link to="/dashboard"><AiOutlineArrowLeft size={32} className='link-icon'/></Link></div>
            <div className="title">Balance Sheet</div>
        </div>
        <div className="main-content">
            <div className="header">
                <h2>Transactions</h2>
                <input type="text" className='searchbar' placeholder='Search'/>
                {/* <div className="searchbar"></div> */}
            </div>
            <div className="sheet">
                <div className="sheet-title">
                    <p>Date</p>
                    <p>Name</p>
                    <p>Type</p>
                    <p>Mode</p>
                    <p>Amount</p>
                </div>
                <div className="sheet-contents">
                    <p>15 Aug 2023</p>
                    <p>Amit Rahangdale</p>
                    <p>Installment</p>
                    <p>UPI</p>
                    <p>Rs2000</p>
                </div>
            </div>
        </div>
    </SheetWrapper>
  )
}

export default Sheet