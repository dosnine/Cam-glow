import React from 'react';
import styles from '../styles/PromoSection.module.css';
import YouTubeVideo from '../Misc/YouTubeVideo';
import PhoneNumber from './../Misc/PhoneNumber';
import ImagePopup from './../Misc/ImagePopup';
import { Instagram, Facebook, Scissors, ShieldCheck, Smile } from 'lucide-react';

const Hero = () => {
  return (
    <section className={styles.promoSection}>
      <div className={styles.imageWrapper}>

        <YouTubeVideo url="https://youtu.be/KouJncv9pbI?si=u3yFtFTYxHwUvkCc" />
      </div>

      <div className={styles.content}>
        <h1>
          Transform Your Style
          <span className='text-primary-color'> with Expert Care</span>
        </h1>
        
        <p className={styles.description}>
          Professional hairstyling services by Camillia, experienced entrepreneur and certified hairdresser.
          Open Mon-Sat 9AM-4PM. Book your perfect look today!
        </p>

        <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mt-2">
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center items-center">
            <a 
              href="/booking"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary-color text-white font-semibold py-4 px-8 rounded-xl transition-transform hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              <Scissors className="w-5 h-5" />
              Book Appointment
            </a>
            <a 
              href="/hairstyles"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-secondary-color text-white font-semibold py-4 px-8 rounded-xl transition-transform hover:scale-[1.02] active:scale-95 shadow-lg"
            >
              View Hairstyles
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 text-center">
          <div className="flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-primary-color mr-2" />
              <span>Secure Booking & Payments</span>
            </div>
            <div className="flex items-center">
              <Smile className="w-5 h-5 text-primary-color mr-2" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center gap-6">
          <a href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-8 h-8 text-primary-color hover:text-secondary-color transition-colors" />
          </a>
          <a href="FACEBOOK_URL" target="_blank" rel="noopener noreferrer">
            <Facebook className="w-8 h-8 text-primary-color hover:text-secondary-color transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;