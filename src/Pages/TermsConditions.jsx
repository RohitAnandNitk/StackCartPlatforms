import React from "react";
import { FileText, Shield, AlertTriangle, Scale } from "lucide-react";
import "./TermsConditions.css";

const TermsConditions = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        {/* Header */}
        <section className="terms-header">
          <div className="header-icon">
            <FileText size={48} />
          </div>
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-subtitle">Last updated on August 13, 2025</p>
        </section>

        {/* Content */}
        <div className="terms-content">
          {/* Introduction */}
          <section className="terms-section">
            <h2 className="section-title">
              <Scale className="title-icon" />
              Definitions
            </h2>
            <div className="section-content">
              <p>
                For the purpose of these Terms and Conditions, the term{" "}
                <strong>"we"</strong>,<strong>"us"</strong>,{" "}
                <strong>"our"</strong> used anywhere on this page shall mean
                <strong>StackCart</strong>, whose registered/operational office
                is:
              </p>
              <div className="address-block">
                <p>
                  F/F, H-C.56, HASTSHAL VIHAR, UTTAM NAGAR,
                  <br />
                  MADAN GENERAL STORE, WEST DELHI,
                  <br />
                  New Delhi, West Delhi, Delhi, 110059
                  <br />
                  Uttam Nagar DELHI 110059
                </p>
              </div>
              <p>
                <strong>"You"</strong>, <strong>"your"</strong>,{" "}
                <strong>"user"</strong>,<strong>"visitor"</strong> shall mean
                any natural or legal person who is visiting our website and/or
                agreed to purchase from us.
              </p>
            </div>
          </section>

          {/* Terms */}
          <section className="terms-section">
            <h2 className="section-title">
              <Shield className="title-icon" />
              Terms of Use
            </h2>
            <div className="section-content">
              <p>
                Your use of the website and/or purchase from us are governed by
                the following Terms and Conditions:
              </p>

              <div className="terms-list">
                <div className="term-item">
                  <h3>Website Content</h3>
                  <p>
                    The content of the pages of this website is subject to
                    change without notice.
                  </p>
                </div>

                <div className="term-item">
                  <h3>Warranties and Liability</h3>
                  <p>
                    Neither we nor any third parties provide any warranty or
                    guarantee as to the accuracy, timeliness, performance,
                    completeness or suitability of the information and materials
                    found or offered on this website for any particular purpose.
                    You acknowledge that such information and materials may
                    contain inaccuracies or errors and we expressly exclude
                    liability for any such inaccuracies or errors to the fullest
                    extent permitted by law.
                  </p>
                </div>

                <div className="term-item">
                  <h3>User Responsibility</h3>
                  <p>
                    Your use of any information or materials on our website
                    and/or product pages is entirely at your own risk, for which
                    we shall not be liable. It shall be your own responsibility
                    to ensure that any products, services or information
                    available through our website and/or product pages meet your
                    specific requirements.
                  </p>
                </div>

                <div className="term-item">
                  <h3>Intellectual Property</h3>
                  <p>
                    Our website contains material which is owned by or licensed
                    to us. This material includes, but is not limited to, the
                    design, layout, look, appearance and graphics. Reproduction
                    is prohibited other than in accordance with the copyright
                    notice, which forms part of these terms and conditions.
                  </p>
                </div>

                <div className="term-item">
                  <h3>Trademarks</h3>
                  <p>
                    All trademarks reproduced in our website which are not the
                    property of, or licensed to, the operator are acknowledged
                    on the website.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Restrictions */}
          <section className="terms-section">
            <h2 className="section-title">
              <AlertTriangle className="title-icon" />
              Restrictions and Legal
            </h2>
            <div className="section-content">
              <div className="terms-list">
                <div className="term-item">
                  <h3>Unauthorized Use</h3>
                  <p>
                    Unauthorized use of information provided by us shall give
                    rise to a claim for damages and/or be a criminal offense.
                  </p>
                </div>

                <div className="term-item">
                  <h3>External Links</h3>
                  <p>
                    From time to time our website may also include links to
                    other websites. These links are provided for your
                    convenience to provide further information.
                  </p>
                </div>

                <div className="term-item">
                  <h3>Linking Policy</h3>
                  <p>
                    You may not create a link to our website from another
                    website or document without StackCart's prior written
                    consent.
                  </p>
                </div>

                <div className="term-item">
                  <h3>Governing Law</h3>
                  <p>
                    Any dispute arising out of use of our website and/or
                    purchase with us and/or any engagement with us is subject to
                    the laws of India.
                  </p>
                </div>

                <div className="term-item">
                  <h3>Payment Authorization</h3>
                  <p>
                    We shall be under no liability whatsoever in respect of any
                    loss or damage arising directly or indirectly out of the
                    decline of authorization for any Transaction, on Account of
                    the Cardholder having exceeded the preset limit mutually
                    agreed by us with our acquiring bank from time to time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="terms-section contact-section">
            <h2 className="section-title">Contact Information</h2>
            <div className="section-content">
              <p>
                If you have any questions about these Terms & Conditions, please
                contact us at:
              </p>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong> support@stackcart.in
                </p>
                <p>
                  <strong>Phone:</strong> +91 928-991-6169
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
