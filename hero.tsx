"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="hero">
      <div className="img">
        <Image src="/images/f2.webp" alt="Fareeha Siddiqi" width="400" height="400" />
      </div>
      <div className="info">
        <h1 className="name">Hi, <br /> I'm <br /> Fareeha Siddiqi</h1>
        <h2>Innovative Front-End Developer </h2>
        <p>Passionate about AI, front-end development, and chemistry, I bring a unique blend of tech and science to education. With a strong foundation in teaching, I create engaging, interactive learning experiences that connect theory to real-world applications. My goal is to make complex topics accessible and inspiring for all learners.</p>
        <div className="btn2">
          <Link href="/" className="btn">Hire Me</Link>
          <Link href="/contact" className="btn">Contact Me</Link>
          <Link href="/blog" className="btn3">My blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
