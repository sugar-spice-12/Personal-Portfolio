import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/feedbackSlider.css';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import ZoomImage from "./ZoomImage";

const FeedbackCard = ({
  index,
  heading,
  subParagraph,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='flex justify-center mb-6'>
      <div className='w-72 h-72 rounded-lg overflow-hidden'>
        <ZoomImage
          src={image}
          alt={`feedback_by-${name}`}
          className='w-full h-full'
        />
      </div>
    </div>

    <div className='mt-1'>
      <h3 className='text-white font-bold text-xl mb-2'>{heading}</h3>
      <p className='text-secondary text-[16px]'>{subParagraph}</p>
    </div>
  </motion.div>
);

const chunkArray = (arr, size) => arr.length > 0 ? arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []) : [];

const Feedbacks = () => {
  const testimonialChunks = chunkArray(testimonials, 3);
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Achievements.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div className="achievements-slider-wrapper" style={{ position: 'relative', overflow: 'visible' }}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: '.feedback-swiper-button-next',
              prevEl: '.feedback-swiper-button-prev',
            }}
            pagination={{ clickable: true, el: '.feedback-swiper-pagination' }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            spaceBetween={30}
            slidesPerView={1}
          >
            {testimonialChunks.map((chunk, idx) => (
              <SwiperSlide key={idx} className="flex gap-7">
                {chunk.map((testimonial, i) => (
                  <FeedbackCard key={testimonial.heading} index={i} {...testimonial} />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom navigation and pagination */}
          <div className='feedback-swiper-button-prev feedback-swiper-nav'>
            <svg viewBox="0 0 20 20" width="18" height="18"><polyline points="13 4 7 10 13 16" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className='feedback-swiper-button-next feedback-swiper-nav'>
            <svg viewBox="0 0 20 20" width="18" height="18"><polyline points="7 4 13 10 7 16" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className='feedback-swiper-pagination'></div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
