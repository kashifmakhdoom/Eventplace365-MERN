import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
        <Link href='/'>
          <Image
            src='/assets/images/logo.png'
            width={220}
            height={140}
            alt='Eventplace Logo'
          />
        </Link>

        <p>2024 Eventplace. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
