import { Link } from "gatsby"
import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(Link => {
            return (
              <a href={Link.url} key={Link.id} className="social-link">
                {Link.icon}
              </a>
            )
          })}
        </div>
        <h4>copyright &copy; {new Date().getFullYear()}
        <span>WebDev</span>all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
