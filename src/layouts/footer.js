import { Link } from "react-router-dom";

import {
  homePage,
  archivePage,
  directoryPage,
  meetPage,
  proceedPage,
} from "../routers/routePath";

export default function Footer({ activePageUrl }) {
  const linkClass = (linkUrl) => (activePageUrl === linkUrl ? "active" : "");

  return (
    <>
      <div className="footer-tabs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul>
                <li>
                  <Link to={homePage} className={linkClass(homePage)}>
                    <small>Sessions</small>

                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to={directoryPage} className={linkClass(directoryPage)}>
                    <small>Directory</small>
                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to={proceedPage} className={linkClass(proceedPage)}>
                    <small>Submit Link Question</small>
                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to={meetPage} className={linkClass(meetPage)}>
                    <small>Meet D Team</small>
                    <span></span>
                  </Link>
                </li>
                <li>
                  <Link to={archivePage} className={linkClass(archivePage)}>
                    <small>Archives</small>
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
