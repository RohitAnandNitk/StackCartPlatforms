import React from "react";
import {
  RotateCcw,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  CreditCard,
  Mail,
  Phone,
} from "lucide-react";
import "./CancellationRefund.css";

const CancellationRefund = () => {
  return (
    <div className="cancellation-page">
      <div className="cancellation-container">
        {/* Header */}
        <section className="cancellation-header">
          <div className="header-icon">
            <RotateCcw size={48} />
          </div>
          <h1 className="cancellation-title">Cancellation & Refund Policy</h1>
          <p className="cancellation-subtitle">
            Last updated on August 13, 2025
          </p>
        </section>

        {/* Content */}
        <div className="cancellation-content">
          {/* Our Commitment */}
          <section className="cancellation-section">
            <h2 className="section-title">
              <CheckCircle className="title-icon" />
              Our Commitment to You
            </h2>
            <div className="section-content">
              <p>
                <strong>StackCart</strong> believes in helping its customers as
                far as possible, and has therefore a liberal cancellation
                policy. We understand that sometimes plans change, and we want
                to make the process as smooth as possible for you.
              </p>
            </div>
          </section>

          {/* Cancellation Policy */}
          <section className="cancellation-section">
            <h2 className="section-title">
              <XCircle className="title-icon" />
              Cancellation Guidelines
            </h2>
            <div className="section-content">
              <div className="policy-grid">
                <div className="policy-card accepted">
                  <div className="policy-icon">
                    <CheckCircle size={32} />
                  </div>
                  <h3>Cancellation Accepted</h3>
                  <div className="policy-details">
                    <h4>Timeline</h4>
                    <p>
                      Cancellations will be considered only if the request is
                      made within <strong>7 days</strong> of placing the order.
                    </p>

                    <h4>Condition</h4>
                    <p>
                      The cancellation request may not be entertained if the
                      orders have been communicated to the vendors/merchants and
                      they have initiated the process of shipping them.
                    </p>
                  </div>
                </div>

                <div className="policy-card restricted">
                  <div className="policy-icon">
                    <XCircle size={32} />
                  </div>
                  <h3>Cancellation Restrictions</h3>
                  <div className="policy-details">
                    <h4>Perishable Items</h4>
                    <p>
                      StackCart does not accept cancellation requests for
                      perishable items like flowers, eatables etc.
                    </p>

                    <h4>Alternative</h4>
                    <p>
                      However, refund/replacement can be made if the customer
                      establishes that the quality of product delivered is not
                      good.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Process */}
          <section className="cancellation-section">
            <h2 className="section-title">
              <CreditCard className="title-icon" />
              Refund Process
            </h2>
            <div className="section-content">
              <p>
                If you are eligible for a refund, the same will be processed to
                your original payment method within{" "}
                <strong>7-10 business days</strong> after the cancellation
                confirmation.
              </p>
              <ul className="refund-steps">
                <li>
                  <Clock size={18} /> Refund timelines may vary depending on
                  your bank or payment provider.
                </li>
                <li>
                  <AlertCircle size={18} /> Shipping charges (if any) are
                  non-refundable unless the cancellation is due to our error.
                </li>
              </ul>
            </div>
          </section>

          {/* Exceptions */}
          <section className="cancellation-section">
            <h2 className="section-title">
              <AlertCircle className="title-icon" />
              Exceptions
            </h2>
            <div className="section-content">
              <p>Refunds are not applicable for:</p>
              <ul>
                <li>Digital products once downloaded or accessed.</li>
                <li>Services already rendered.</li>
                <li>Customized or made-to-order items.</li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="cancellation-section">
            <h2 className="section-title">
              <Mail className="title-icon" />
              Need Help?
            </h2>
            <div className="section-content">
              <p>
                If you have any questions about our cancellation and refund
                policy, please contact us:
              </p>
              <ul className="contact-info">
                <li>
                  <Mail size={18} /> Email: support@stackcart.com
                </li>
                <li>
                  <Phone size={18} /> Phone: +91 98765 43210
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <footer className="cancellation-footer">
          <p>© {new Date().getFullYear()} StackCart. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default CancellationRefund;
