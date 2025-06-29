import React, { useState, useEffect, useRef } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import '../styles/projectSlider.css';
import Spline from '@splinetool/react-spline';
import { useSwiper } from 'swiper/react';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[18px]'>{name}</h3>
          <p className='mt-2 text-[#23234a] text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [detailIndex, setDetailIndex] = useState(null);
  const [showSpline, setShowSpline] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setShowSpline(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 relative">
        <div className="flex-1 min-w-0">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described and reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          These experiences demonstrate my commitment to building user-focused, functional applications.
        </motion.p>
        </div>
        {/* Spline 3D model absolutely positioned on top right of section */}
        <div className="hidden lg:block absolute right-0 z-30" style={{ top: '-100px', right: '-45px', width: '500px', height: '400px', pointerEvents: 'auto' }}>
          <Spline scene="https://prod.spline.design/NlEZ9youoKPmqM50/scene.splinecode" />
        </div>
      </div>

      <div className='mt-20 w-full relative'>
        {/* Pause/Play Button */}
        <button
          onClick={() => {
            setIsPaused((prev) => {
              const next = !prev;
              if (swiperRef.current) {
                if (next) {
                  swiperRef.current.autoplay.stop();
                } else {
                  swiperRef.current.autoplay.start();
                }
              }
              return next;
            });
          }}
          className='absolute top-2 right-2 z-40 bg-black bg-opacity-60 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-opacity-80 transition'
          style={{ fontSize: '1.5rem' }}
          aria-label={isPaused ? 'Play slider' : 'Pause slider'}
        >
          {isPaused ? '▶' : '||'}
        </button>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect='coverflow'
          grabCursor={true}
          centeredSlides={true}
          slidesPerView='auto'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          autoplay={!isPaused ? { delay: 3500, disableOnInteraction: false } : false}
          className='project-slider relative'
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
        {projects.map((project, index) => (
            <SwiperSlide key={`project-${index}`} className='project-slide flex items-center justify-between bg-transparent'>
              <div className='project-slide-content flex flex-col md:flex-row items-center justify-between w-full h-full p-8 md:p-16 rounded-3xl'>
                {/* Left: Project Info */}
                <div className={`flex-1 text-left max-w-lg slide-animated-text`}>
                  <h2 className='text-lg md:text-xl font-bold mb-4 text-white'>{project.name}</h2>
                  <ul className='text-secondary mb-6 list-disc list-inside space-y-1'>
                    {project.points && project.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                      <span key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</span>
                    ))}
                  </div>
                </div>
                {/* Right: Project Image */}
                <div className='flex-1 flex justify-center items-center'>
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className='project-image w-[450px] h-[450px] object-contain bg-transparent' 
                    style={{ background: 'none' }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* Custom navigation and pagination */}
          <div className='swiper-button-prev custom-swiper-nav'>
            <svg viewBox="0 0 20 20" width="14" height="14"><polyline points="13 4 7 10 13 16" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className='swiper-button-next custom-swiper-nav'>
            <svg viewBox="0 0 20 20" width="14" height="14"><polyline points="7 4 13 10 7 16" stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className='swiper-pagination custom-swiper-pagination'></div>
        </Swiper>
      </div>

      {/* Detail Modal Overlay */}
      {detailIndex !== null && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 animate-fadeIn'>
          <div className='bg-white   dark:bg-[#222] rounded-3xl p-8 max-w-2xl w-full relative animate-slideUp'>
            <button
              className='absolute top-4 right-4 text-2xl font-bold text-gray-500 hover:text-black dark:hover:text-white transition'
              onClick={() => setDetailIndex(null)}
            >
              ×
            </button>
            <h2 className='text-3xl font-bold mb-2 text-white'>{projects[detailIndex].name}</h2>
            <p className='mb-4 text-[#23234a] dark:text-[#23234a]'>{projects[detailIndex].description}</p>
            <img src={projects[detailIndex].image} alt={projects[detailIndex].name} className='w-full max-h-64 object-contain rounded-xl mb-4' />
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Works, "");
