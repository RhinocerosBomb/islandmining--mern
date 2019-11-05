import '../../assets/css/dashboard.css';
import './Dashboard.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo_dashboard from '../../assets/img/logo/logo_dashboard.png';
import btc_icon from '../../assets/img/icon/BTC_icon.png';
import eth_icon from '../../assets/img/icon/ETH_icon.png';
import document from '../../assets/img/icon/document.png';
import miningcoin_symbol_1 from '../../assets/img/icon/miningcoin-symbol-1.png';

export default class extends Component {
  render() {
    return (
      <div>
        <div className="navbar absolute text-white flex flex-wrap pt-8">
          <Link to="/">
            <img src={logo_dashboard} alt="" />
          </Link>
          <div className="logged-in-name">
            <div>
              Logged in as <span id="username">aaa@gmail.com</span> |&nbsp;
              <form
                style={{ display: 'inline' }}
                action="/logout"
                method="POST"
              >
                <input
                  style={{ backgroundColor: 'transparent', cursor: 'pointer' }}
                  type="submit"
                  value="Log out"
                />
              </form>
            </div>
          </div>
        </div>

        <div
          className="mb-16 py-8 px-16 bg-gray-100 flex flex-wrap"
          style={{ borderRadius: '5px' }}
        >
          <h3 className="heading-tertiary" style={{ fontWeight: '500' }}>
            Dashboard
          </h3>
          <h3 className="pl-4">
            Current Conversion Rates&nbsp;
            <em>(Updated Oct 24, 2019 12:00:00 UTC)</em>
          </h3>
          <div className="pl-4 flex flex-wrap">
            <div style={{ color: '#2185D0' }}>
              <img className="crypto_icon" src={btc_icon} alt="" />
              <strong>BTC</strong> $
              <span className="" id="BTC-price">
                9668.64
              </span>
            </div>
            <div className="pl-8" style={{ color: '#2185D0' }}>
              <img className="crypto_icon" src={eth_icon} alt="" />
              <strong>ETH</strong> $
              <span className="" id="ETH-price">
                186.44
              </span>
            </div>
          </div>

          <div
            className="ml-auto px-8 flex flex-wrap"
            style={{ backgroundColor: '#E1E3EC' }}
          >
            <h3 className="heading-tertiary" style={{ color: '#716ACA' }}>
              Official Time:&nbsp;
            </h3>
            <span id="official-time" style={{ color: '#716ACA' }}>
              12:00 AM
            </span>
          </div>
        </div>
        <header className="container mx-auto flex flex-wrap px-16 md:flex-no-wrap mb-16">
          <img
            src={miningcoin_symbol_1}
            style={{
              width: '20%',
              height: '100%',
              display: 'block',
              marginBottom: '2rem'
            }}
            alt=""
          />
          <div className="md:pl-16 w-full">
            <h1 className="heading-primary">
              Mining Coin (MNT) - Private Sale Round 1 (1 MNT = $0.06USD)
            </h1>
            <h3 className="heading-tertiary pb-4">
              Mining Coin - A Distributed Cloud Mining Platform
            </h3>
            <hr />
            <div className="py-4">
              <div className="w-full flex flex-wrap">
                <div className="w-full pb-4 md:w-1/2">
                  <p>Price</p>
                  <div className="heading-tertiary">
                    1 MNT = $0.06 USD = 0.00000617 BTC = 0.000285 ETH
                  </div>
                </div>
                <div className="w-full pb-4 md:w-1/4">
                  <p>Round 1 Supply</p>
                  <div className="heading-tertiary">50,000,000 MNT</div>
                </div>
                <div className="w-full pb-4 md:w-1/4">
                  <p>Total Supply</p>
                  <div className="heading-tertiary">700,000,000 MNT</div>
                </div>
              </div>
            </div>

            <hr />
            <div className="w-full flex flex-wrap py-4">
              <div className="w-full pb-4 lg:w-1/3 flex">
                <img className="pr-4" src={document} alt="" />
                <a
                  className="underline"
                  href="https://docsend.com/view/hz858ia"
                >
                  Whitepaper
                </a>
              </div>
              <div className="w-full pb-4 lg:w-1/3 flex">
                <img className="pr-4" src={document} alt="" />
                <a
                  className="underline"
                  href="https://docsend.com/view/dkwdnxb"
                >
                  Project Brochure
                </a>
              </div>
              <div className="w-full pb-4 lg:w-1/3 flex">
                <a
                  className="underline"
                  href="https://etherscan.io/token/0x49073cccc5309a814da07b47ca604fcd06590702"
                >
                  View Contract on Etherscan
                </a>
              </div>
            </div>
            <p>
              BTC, ETH conversion rates updated every 12 hours at 00:00 and
              12:00 UTC
            </p>
          </div>
        </header>

        <section className="container mx-auto px-16 py-12 mb-16">
          <h1 className="heading-primary pb-8">Mining Coin (MNT) Overview</h1>
          <h3 className="heading-tertiary">Project Introduction</h3>
          <p>
            MNT token holders are entitled to a percentage of hashing power
            produced by Island Mining facilities, proportional to the balance of
            MNT tokens in their account. Crypto mined with hashing power
            received for holding MNT is held in users IslandEX Wallet. Users
            have the option to trade the Bitcoin (or other crypto) held in their
            wallet for fiat currency through IslandEX Exchange. Users can hold
            fiat at IslandEX and use a prepaid debit card issued through
            IslandEX or one of its banking affiliates, to easily spend their
            funds.
          </p>
        </section>

        <section
          id="application"
          className="container mx-auto px-16 py-12 mb-16"
        >
          <h1 className="heading-primary mb-8">KYC Registration</h1>
          <div className="w-2/3 flex flex-wrap mx-auto mb-8">
            <h3 className="heading-tertiary">KYC Status</h3>
            <div className="md:w-2/3 mx-auto">
              <div className="alert alert-warning font-bold text-center">
                Please complete KYC application below
              </div>
            </div>
          </div>
          <div className="text-center mb-16">
            <h2 className="heading-secondary">
              In order to purchase Mining Coin, you’ll need to complete a quick
              KYC (Know Your Customer) process. To complete your registration
              for the token sale, please click the link below.
            </h2>
            <p style={{ color: '#5D78FF' }}>
              We take your data security seriously. That’s why we use the same
              automated, SSL-encrypted KYC provider used by major financial
              instutions and cryptocurrency exchanges.
            </p>
          </div>

          <div className="w-full md:w-2/3 mx-auto">
            <h3 className="heading-tertiary">Instructions before you start:</h3>
            <ul>
              <li>
                <span className="font-bold">Have your Photo ID ready</span>{' '}
                (drivers license, passport, etc)
              </li>
              <li>
                <span className="font-bold">Find a well-lit space.</span> The
                facial recognition check will require your camera.
              </li>
            </ul>

            <div className="flex flex-wrap px-8 md:px-24 mb-16">
              <div className="w-1/2">
                <h3 className="heading-tertiary">PC or Mac:</h3>
                <p>Make sure your webcam is enabled</p>
              </div>
              <div className="w-1/2">
                <h3 className="heading-tertiary">Mobile:</h3>
                <p>You can use your device’s camera</p>
              </div>
            </div>
            <div className="mb-16 px-8 py-6 border-solid border-2 rounded-lg border-gray-500 shadow-lg flex flex-wrap content-center">
              <form
                id="submitPendingForm"
                action="/submitPending"
                className="mx-auto"
                method="POST"
              >
                <a
                  id="registration-btn"
                  href="https://islandmining.netverify.com/web/v4/app?authorizationToken=eyJhbGciOiJIUzUxMiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAB3MPQvCMBCA4f9ycw-a5JpLuhUapYIVShUc83GZOzgo4n-3ur48vG-Q5_CAXnWstVMtd55VA3Eq0AM7a4tvGY1QRopOMIpRmMgKJ0ttjgYayIvUXZ-u5-lyDHNYhjWMv_6fpOqyKzZhNeSQlNcYWQh9V2upmkkVu-NtfW27nsN6C8t0uMPnCwkJqy6bAAAA.Uo5pd1_Ke-XO2agexiS5aDiirEtqi7guxfVgnW7_AsWO5-r9S0bb60fNKJ_-6zVEBrKE7YZHbOqJxkQa-ckKew&amp;locale=en-US"
                  target="_blank"
                  className="signup_icomply text-center py-8 mx-auto"
                >
                  <h2 className="heading-secondary">Begin KYC Registration</h2>
                </a>
              </form>
            </div>
            <p>
              Processing may take up to 5-10 minutes. Please refresh your page
              to check on your registration progress.
            </p>
          </div>
        </section>
        <div className="py-4">&nbsp;</div>
      </div>
    );
  }
}
