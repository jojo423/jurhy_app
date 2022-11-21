import React from "react";

const ModuleFooterContact = () => {
    return (
        <div className="ps-footer--contact">
            <h5 className="ps-footer__title">Need help</h5>
            <div className="ps-footer__fax">
                <i className="icon-telephone"></i>
                +971 – 2 – 5067321
            </div>
            <p className="ps-footer__work">
                Monday – Friday: 9:00-20:00
                <br />
                Saturday: 11:00 – 15:00
            </p>
            <hr />
            <p>
                <a
                    className="ps-footer__email"
                    href="mailto:contact@example.com">
                    {" "}
                    <i className="icon-envelope"></i>
                    info@jurhy.com{" "}
                </a>
            </p>
            <p>
                <a
                    className="ps-footer__email"
                    href="mailto:contact@example.com">
                    {" "}
                    <i className="icon-envelope"></i>
                    help@jurhy.com{" "}
                </a>
            </p>
        </div>
    );
};

export default ModuleFooterContact;
