import React from "react";
import { Shield, Eye, Lock, Database, Settings, Mail } from "lucide-react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        {/* Header */}
        <section className="privacy-header">
          <div className="header-icon">
            <Shield size={48} />
          </div>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">Last updated on August 13, 2025</p>
        </section>

        {/* Content */}
        <div className="privacy-content">
          {/* Introduction */}
          <section className="privacy-section">
            <h2 className="section-title">
              <Eye className="title-icon" />
              Our Commitment to Privacy
            </h2>
            <div className="section-content">
              <p>
                This privacy policy sets out how <strong>StackCart</strong> uses
                and protects any information that you give StackCart when you
                visit their website and/or agree to purchase from them.
              </p>
              <p>
                StackCart is committed to ensuring that your privacy is
                protected. Should we ask you to provide certain information by
                which you can be identified when using this website, then you
                can be assured that it will only be used in accordance with this
                privacy statement.
              </p>
              <p>
                StackCart may change this policy from time to time by updating
                this page. You should check this page from time to time to
                ensure that you adhere to these changes.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="privacy-section">
            <h2 className="section-title">
              <Database className="title-icon" />
              Information We Collect
            </h2>
            <div className="section-content">
              <p>We may collect the following information:</p>
              <div className="info-list">
                <div className="info-item">
                  <h3>Personal Information</h3>
                  <ul>
                    <li>Name</li>
                    <li>Contact information including email address</li>
                    <li>
                      Demographic information such as postcode, preferences and
                      interests, if required
                    </li>
                    <li>
                      Other information relevant to customer surveys and/or
                      offers
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="privacy-section">
            <h2 className="section-title">
              <Settings className="title-icon" />
              How We Use Your Information
            </h2>
            <div className="section-content">
              <p>
                We require this information to understand your needs and provide
                you with a better service, and in particular for the following
                reasons:
              </p>
              <div className="usage-list">
                <div className="usage-item">
                  <h3>Internal record keeping</h3>
                  <p>
                    We maintain records to provide you with better service and
                    support.
                  </p>
                </div>
                <div className="usage-item">
                  <h3>Product and service improvement</h3>
                  <p>
                    We may use the information to improve our products and
                    services.
                  </p>
                </div>
                <div className="usage-item">
                  <h3>Marketing communications</h3>
                  <p>
                    We may periodically send promotional emails about new
                    products, special offers or other information which we think
                    you may find interesting using the email address which you
                    have provided.
                  </p>
                </div>
                <div className="usage-item">
                  <h3>Market research</h3>
                  <p>
                    From time to time, we may also use your information to
                    contact you for market research purposes. We may contact you
                    by email, phone, fax or mail.
                  </p>
                </div>
                <div className="usage-item">
                  <h3>Website customization</h3>
                  <p>
                    We may use the information to customise the website
                    according to your interests.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Security */}
          <section className="privacy-section">
            <h2 className="section-title">
              <Lock className="title-icon" />
              Data Security
            </h2>
            <div className="section-content">
              <p>
                We are committed to ensuring that your information is secure. In
                order to prevent unauthorised access or disclosure we have put
                in suitable measures.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section className="privacy-section">
            <h2 className="section-title">
              <Database className="title-icon" />
              How We Use Cookies
            </h2>
            <div className="section-content">
              <div className="cookie-explanation">
                <h3>What are cookies?</h3>
                <p>
                  A cookie is a small file which asks permission to be placed on
                  your computer's hard drive. Once you agree, the file is added
                  and the cookie helps analyze web traffic or lets you know when
                  you visit a particular site. Cookies allow web applications to
                  respond to you as an individual. The web application can
                  tailor its operations to your needs, likes and dislikes by
                  gathering and remembering information about your preferences.
                </p>
              </div>

              <div className="cookie-usage">
                <h3>Our cookie usage</h3>
                <p>
                  We use traffic log cookies to identify which pages are being
                  used. This helps us analyze data about webpage traffic and
                  improve our website in order to tailor it to customer needs.
                  We only use this information for statistical analysis purposes
                  and then the data is removed from the system.
                </p>
                <p>
                  Overall, cookies help us provide you with a better website, by
                  enabling us to monitor which pages you find useful and which
                  you do not. A cookie in no way gives us access to your
                  computer or any information about you, other than the data you
                  choose to share with us.
                </p>
                <p>
                  You can choose to accept or decline cookies. Most web browsers
                  automatically accept cookies, but you can usually modify your
                  browser setting to decline cookies if you prefer. This may
                  prevent you from taking full advantage of the website.
                </p>
              </div>
            </div>
          </section>

          {/* User Control */}
          <section className="privacy-section">
            <h2 className="section-title">
              <Settings className="title-icon" />
              Controlling Your Personal Information
            </h2>
            <div className="section-content">
              <p>
                You may choose to restrict the collection or use of your
                personal information in the following ways:
              </p>

              <div className="control-list">
                <div className="control-item">
                  <h3>Opt-out of marketing</h3>
                  <p>
                    Whenever you are asked to fill in a form on the website,
                    look for the box that you can click to indicate that you do
                    not want the information to be used by anybody for direct
                    marketing purposes.
                  </p>
                </div>

                <div className="control-item">
                  <h3>Change your preferences</h3>
                  <p>
                    If you have previously agreed to us using your personal
                    information for direct marketing purposes, you may change
                    your mind at any time by writing to or emailing us at{" "}
                    <strong>support@stackcart.in</strong>
                  </p>
                </div>

                <div className="control-item">
                  <h3>Third-party sharing</h3>
                  <p>
                    We will not sell, distribute or lease your personal
                    information to third parties unless we have your permission
                    or are required by law to do so. We may use your personal
                    information to send you promotional information about third
                    parties which we think you may find interesting if you tell
                    us that you wish this to happen.
                  </p>
                </div>

                <div className="control-item">
                  <h3>Data correction</h3>
                  <p>
                    If you believe that any information we are holding on you is
                    incorrect or incomplete, please write to or contact us as
                    soon as possible. We will promptly correct any information
                    found to be incorrect.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="privacy-section contact-section">
            <h2 className="section-title">
              <Mail className="title-icon" />
              Contact Us
            </h2>
            <div className="section-content">
              <p>
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="contact-info">
                <div className="contact-method">
                  <h3>Email</h3>
                  <p>support@stackcart.in</p>
                </div>
                <div className="contact-method">
                  <h3>Phone</h3>
                  <p>+91 928-991-6169</p>
                </div>
                <div className="contact-method">
                  <h3>Address</h3>
                  <p>
                    F/F, H-C.56, HASTSHAL VIHAR, UTTAM NAGAR,
                    <br />
                    MADAN GERNAL STORE, WEST DELHI,
                    <br />
                    New Delhi, West Delhi, Delhi, 110059
                    <br />
                    Uttam Nagar DELHI 110059
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
