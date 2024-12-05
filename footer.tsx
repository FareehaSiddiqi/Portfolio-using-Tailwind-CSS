import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="footer">
      <Link href="https://www.linkedin.com/in/fareeha-siddiqi-420664320/" className="social-btn linkedin">in</Link>
      <Link href="https://www.facebook.com/profile.php?id=61568908861257" className="social-btn facebook">f</Link>
      <Link href="https://www.scopus.com/authid/detail.uri?authorId=57195593423" className="social-btn google-scholar">S</Link>
      <Link href="https://github.com/FareehaSiddiqi" target="_blank" rel="noopener noreferrer" className="social-btn github">G</Link>
      <Link href="https://vercel.com/fareeha-siddiqis-projects" target="_blank" rel="noopener noreferrer" className="social-btn vercel">V</Link>
      <Link href="https://www.npmjs.com/~fareehasiddiqi" target="_blank" rel="noopener noreferrer" className="social-btn npm">N</Link>
      <Link href="https://www.twitter.com/~fareehasiddiqi" target="_blank" rel="noopener noreferrer" className="social-btn twi">T</Link>
      <Link href="https://www.blogger.com/u/1/blog/posts/1276484227537541310" target="_blank" rel="noopener noreferrer" className="social-btn blog">B</Link>
    </div>
  );
};

export default Footer;
