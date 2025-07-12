import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import banner from "./assets/photo/slider1lider1.jpg";
import banner1 from "./assets/photo/marketing.jpg";
import banner2 from "./assets/photo/marketingse.jpg";
import photo from "./assets/photo/innovation.jpg";
import logo from "./assets/photo/jbh.jpg";
import icon from "./assets/photo/icon-1.png";
import icon1 from "./assets/photo/icon-2.png";
import icon2 from "./assets/photo/icon-3.png";
import icon3 from "./assets/photo/icon-4.png";
import img from "./assets/photo/Screenshot_1-7-2025_121751_unionagency.one.jpeg";
import port1 from "./assets/photo/marketings.jpg";
import port2 from "./assets/photo/marketingse.jpg";
import port3 from "./assets/photo/marketing.jpg";
import port4 from "./assets/photo/about.jpg";
import port5 from "./assets/photo/about1.jpg";
import port6 from "./assets/photo/about3.jpeg";
import quot from "./assets/photo/quotes.png";
import sign from "./assets/photo/signature.png";
import home1 from "./assets/photo/home-5.png";
import home2 from "./assets/photo/home-6.png";
import home3 from "./assets/photo/home-7.png";
import cli1 from "./assets/photo/logo-dark.png";
import cli2 from "./assets/photo/logo.webp";
import cli3 from "./assets/photo/logo2.png";
import cli4 from "./assets/photo/looo-1.png";
import cli5 from "./assets/photo/mainlogo.png";
import cli6 from "./assets/photo/Optical logo.png";
import cli7 from "./assets/photo/new.png";
import cli8 from "./assets/photo/logo (1).webp";
import team1 from "./assets/photo/ashishsir.jpg";
import team2 from "./assets/photo/vershamam.jpg";
import icon8 from "./assets/photo/icon-8.png";
import icon9 from "./assets/photo/icon-9.png";
import icon10 from "./assets/photo/icon-10.png";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import inst1 from "./assets/photo/instagram-1 (1).jpg";
import inst2 from "./assets/photo/instagram-2.jpg";
import inst3 from "./assets/photo/instagram-3.jpg";
import inst4 from "./assets/photo/instagram-4.jpg";
import inst5 from "./assets/photo/instagram-5.jpg";
import inst6 from "./assets/photo/instagram-6.jpg";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);

  // Carousel data
  const carouselItems = [
    {
      id: 1,
      title: "The Best Ever Digital Agency",
      description: "The Best Ever Digital Agency is a team of creative minds, strategic thinkers, and technology experts who craft powerful digital experiences. We help brands grow, connect, and stand out in the digital world with innovative solutions tailored to their goals.",
      image: banner,
    },
    {
      id: 2,
      title: "Creative Design Studio",
      description: "Creative Design Studio is where imagination meets innovation. We specialize in crafting visually stunning designs that capture attention and tell your story in a way words alone cannot. Every pixel we create has a purpose — to inspire, engage, and impress.",
      image:banner1,
    },
    {
      id: 3,
      title: "Online Marketing Agency",
      description: "Online Marketing Agency is your trusted partner in the digital world. We help businesses grow their online presence, reach the right audience, and achieve measurable success through innovative marketing strategies.",
      image: banner2,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Ashish",
      role: "Web-Designer",
      quote: "A Web Designer is a person who designs beautiful and easy-to-use websitesThey decide how a website should look — colors, fonts, images, and layout.",
      image: team1,
    },
    {
      id: 2,
      name: "Versha",
      role: "Graphic-Designer",
      quote: "The team delivered exceptional results that exceeded our expectations. Their attention to detail and creative approach made all the difference in our campaign.",
      image: team2,
    },
    {
      id: 3,
      name: "Anil",
      role: "Full Stack Developer",
      quote: "A Full Stack Developer is someone who can build both the front-end (what users see) and the back-end (the server, database, and logic) of a website or application.",
      image: team1,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (mainContentRef.current && sidebarRef.current) {
        const heroHeight = document.querySelector('.hero-section')?.offsetHeight || 0;
        const scrollPosition = window.scrollY;
        
        // Show sidebar only after scrolling past hero section
        if (scrollPosition > heroHeight) {
          setShowSidebar(true);
          setIsSticky(true);
        } else {
          setShowSidebar(false);
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };


   
  const [active, setActive] = useState("All");

  const images = [
    { src: port1, category: "Design" },
    { src: port2, category: "Advertising" },
    { src: port3, category: "UserExpirience" },
    { src: port4, category: "Branding" },
    { src: port5, category: "Design" },
    { src: port6, category: "Advertising" },
  ];


  const clients = [
    { img: cli1, link: "https://vrmedhealthcare.com/account/index" },
    { img: cli2, link: "https://venusmeddoor.com/" },
    { img: cli3, link: "https://ktmprints.jbhtechinnovation.com/" },
    { img: cli4, link: "https://supplyverge.com/product" },
    { img: cli5, link: "https://youthmarts.jbhtechinnovation.com/" },
    { img: cli6, link: "https://www.opticalexpressions.co.in/" },
    { img: cli7, link: "https://pureform.jbhtechinnovation.com/" },
    { img: cli8, link: "https://csbhospital.com/" },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const clientsPerPage = 4;
  const totalPages = Math.ceil(clients.length / clientsPerPage);

  const visibleClients = clients.slice(
    currentPage * clientsPerPage,
    (currentPage + 1) * clientsPerPage
  );

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen overflow-x-hidden">
      {/* Mobile Menu Button - Positioned same as desktop */}
      <button
        className={`fixed top-4 left-4 z-50 bg-pink-600 text-white p-3 rounded-full shadow-lg ${isMobile ? 'block' : 'hidden'}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Main Content */}
      <div 
        ref={mainContentRef}
        className={`flex-1 bg-white w-full`}
        style={{ minWidth: 0 }}
      >
        {/* Hero Section with Carousel */}
        <div className="relative h-screen w-full hero-section">
          <img
            src={carouselItems[currentSlide].image}
            className="absolute inset-0 w-full h-full object-cover"
            alt="Banner"
          />
          <div className="absolute inset-0 bg-black/70 z-10" />


          <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-5 space-y-0">
            {!isMobile && (
              <div className="w-full flex justify-between items-center md:px-10">
                <button
                  className="text-white text-3xl absolute top-30 left-10"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <FiX /> : <FiMenu />}
                </button>
                <a href="/"><img
                  src={logo}
                  alt="Logo"
                  className="h-30 w-30 absolute right-10 top-20 rounded-[50%] cursor-pointer"
                /></a>
              </div>
            )}

            <p className="text-white uppercase text-sm mt-0">We are</p>
            <h1 className="text-white uppercase text-4xl md:text-6xl font-black leading-tight">
              {carouselItems[currentSlide].title}
            </h1>
            <p className="text-white max-w-xl text-sm md:text-base">
              {carouselItems[currentSlide].description}
            </p>
            <a
              href="#services"
              className="mt-5 bg-pink-500 text-white px-10 py-2 rounded hover:bg-white hover:text-pink-500 transition font-semibold uppercase" 
            >
              View More
            </a>
          </div>
        </div>

        {/* Combined Navigation Controls, Slide Count, and Share Section */}
        <div
          className=" flex flex-nowrap justify-between items-center gap-2 md:gap-4 p-2 md:p-4 border-b -mt-15 w-[80%] bg-white z-20 absolute"
          style={{ marginLeft: !isMobile ? '16rem' : '0' }}
        >
          {/* Navigation Controls and Slide Count */}
          <div className="flex items-center flex-shrink-0 gap-1 md:gap-3">
            <button
              onClick={prevSlide}
              className="h-6 w-6 md:h-8 md:w-8 text-white bg-black flex items-center justify-center hover:bg-pink-600 transition text-[10px] md:text-xs"
            >
              <span className="ml-0.5">&#10094;</span>
            </button>

            <div className="flex items-center gap-0.5 md:gap-2 text-[10px] md:text-sm">
              <span>{currentSlide + 1}</span>
              <div className="w-6 md:w-8 h-px bg-black"></div>
              <span>{carouselItems.length}</span>
            </div>

            <button
              onClick={nextSlide}
              className="h-6 w-6 md:h-8 md:w-8 text-white bg-black flex items-center justify-center hover:bg-pink-600 transition text-[10px] md:text-xs"
            >
              <span className="ml-0.5">&#10095;</span>
            </button>
          </div>

         {/* Scroll Down Button */}
<div className="flex-shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
  <button
    className="animate-bounce cursor-pointer"
    onClick={() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 md:h-8 w-3 md:w-5 text-gray-600 hover:text-pink-600 transition"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</div>

          {/* Share Section */}
          <div className="flex items-center flex-shrink-0 gap-1 md:gap-3">
            <h4 className="text-[10px] md:text-base lg:text-lg font-medium">Share:</h4>
            <div className="flex gap-1 md:gap-2 text-sm md:text-lg text-black">
             <a href="https://www.instagram.com/jbh_webstics"> <FaInstagram className="hover:text-pink-500 transition cursor-pointer" /></a>
              <a href="https://www.facebook.com/jbhtechinnovation"><FaFacebookF className="hover:text-pink-500 transition cursor-pointer" /></a>
              <a href="https://x.com/DigitalJbhk"><FaTwitter className="hover:text-pink-500 transition cursor-pointer" /></a>
             <a href="https://www.linkedin.com/company/jbh-tech-innovation/"><FaLinkedin className="hover:text-pink-500 transition cursor-pointer" /></a>
             
            </div>
          </div>
        </div>

        {/* Sidebar - Placed after carousel in DOM */}
        <div
          ref={sidebarRef}
          className={`${isMobile ? 'fixed' : isSticky ? 'fixed top-0' : 'absolute top-[100vh]'} ${
            isMobile
              ? `left-0 top-0 h-full w-64 z-40 transition-transform duration-300 ease-in-out ${
                  menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`
              : `left-0 w-64 z-30 transition-all duration-300`
          }`}
        >
          <div
            className={`bg-pink-600 text-white shadow-md p-4 space-y-3 ${
              isSticky ? 'h-screen overflow-y-auto' : 'h-full'
            }`}
          >
            {!isMobile && (
              <div className="flex justify-between items-center px-4 py-2">
              <a href="/"><img
                  src={logo}
                  alt="Logo"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-[50%] cursor-pointer"
                />           </a>    
              </div>
            )}
           <ul className="space-y-1 text-sm uppercase font-medium mt-10">
  {[
    'Home',
    'About',
    'Services',
    'Portfolio',
    'Testimonials',
    'Pricing',
    'Client',
    'Team',
    'Contact',
    'Blog',
  ].map((item, index) => {
    const href =
      item === 'Blog'
        ? 'https://www.jbhtechinnovation.com/blog'
        : `#${item.toLowerCase()}`;       

    return (
      <li key={index}>
        <a
          href={href}
          className="block px-4 py-3 rounded hover:bg-black hover:text-white transition font-serif"
          onClick={() => isMobile && setMenuOpen(false)}
          target={item === 'Blog' ? '_blank' : undefined} // optional: open Blog in new tab
          rel={item === 'Blog' ? 'noopener noreferrer' : undefined}
        >
          {item}
        </a>
      </li>
    );
  })}
</ul>

            <div className="flex space-x-5 text-white text-2xl ml-5 mt-5">
             <a href="https://www.facebook.com/jbhtechinnovation"><FaFacebookF className="hover:text-black cursor-pointer" /></a> 
              <a href="https://www.instagram.com/jbh_webstics"><FaInstagram className="hover:text-black cursor-pointer" /></a>
      
            <a href="https://www.linkedin.com/company/jbh-tech-innovation/"><FaLinkedin className="hover:text-black cursor-pointer" /></a>
             <a href="https://x.com/DigitalJbhk"> <FaTwitter className="hover:text-black cursor-pointer" /></a>
            </div>
            <ul className="text-white mt-8 ml-5">
              <li>+91 99 90 14 58 58</li>
              <li>jbh.webstics@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* About Us Section */}
        <div className="p-4 md:p-10 relative"  style={{ marginLeft: !isMobile  ? '16rem' : '0' }}>
          <h4 className="text-pink-600 "id="about">ABOUT US</h4>
          <h1 className="text-4xl font-bold mt-2">WHO WE ARE</h1>

          <div className="mt-8 md:flex">
            <div className="md:w-1/3">
              <img
                src={photo}
                alt="About"
                className="h-80 w-80 rounded mx-auto md:mx-0"
              />
              <a
                href="https://www.jbhtechinnovation.com/software-development-company-faridabad"
                className="inline-block text-white px-12 py-2 bg-black rounded hover:bg-pink-600 transition font-semibold uppercase mt-6" 
              >
                View More
              </a>
            </div>

            <div className="mt-8 md:mt-0 md:w-2/3 md:pl-8 font-serif">
              <h2 className="text-lg font-bold ">ALL AT A GLANCE</h2>
              <p className="text-sm text-gray-700 mt-2 ">
               At Jbh Tech Innovation, we provide advanced technology solutions to drive business success. Our expertise in software development, IT services, and digital transformation ensures your company stays ahead in the competitive market. Partner with us today and explore how our innovative solutions can elevate your business.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">✔</span>
                  <span>
                    AI-powered tools optimize marketing campaigns, personalize content, and enhance customer.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✔</span>
                  <span>
                    Hyper-personalization and improved customer experiences are key for better engagement.
                  </span>
                </li>
                <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span> AI-driven insights enable businesses to understand customer behavior, predict trends, and make smarter decisions.
             </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✔</span>
                <span> Machine learning algorithms help deliver the right message to the right audience at the right time, boosting conversions and loyalty.
             </span>
              </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-black text-white text-center py-16 px-4" style={{ marginLeft: !isMobile && isSticky && showSidebar ? '16rem' : '0' }}>
          <h6 className="text-pink-600 uppercase mb-4" id="services">services</h6>
          <h1 className="text-4xl font-bold mb-4">WHAT WE DO</h1>
          <p className="mb-10 max-w-xl mx-auto font-serif">
            it means the list of tasks, solutions, or help that you or your company provides to customers or clients.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-serif">
            {[
              { icon: icon, title: "WEB-DESIGN" },
              { icon: icon1, title: "GRAPHIC-DESIGN" },
              { icon: icon2, title: "LOGO-DESIGN" },
              { icon: icon3, title: "UI/UX DESIGN" },
            ].map((service, index) => (
              <div key={index} className="space-y-4 p-4">
                <a href="#">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="mx-auto h-16"
                  />
                  <h2 className="text-white mt-2">{service.title}</h2>
                </a>
                <p className="text-sm">
                 Website design & development

Social media presence

Digital advertising campaigns

Interactive media
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="p-4 md:p-10 font-serif" style={{ marginLeft: !isMobile && isSticky && showSidebar ? '16rem' : '0' }}>
          <h4 className="text-pink-600">ABOUT PRODUCT</h4>
          <h1 className="text-4xl font-extrabold mt-2">OUR FEATURES</h1>

          <div className="mt-10 md:flex">
            <div className="md:w-1/2 space-y-8">
              {[
                {
                  num: "01",
                  title: "Modern UI Design",
                  desc: "Modern design = clean, simple, minimalistic, user-focused, and visually appealing design that works well on all devices.",
                },
                {
                  num: "02",
                  title: "Strong UX design",
                  desc: "Strong UX Design means creating a design that is easy for the user to understand and usesolves their problems quickly",
                },
                {
                  num: "03",
                  title: "Responsive",
                  desc: "Responsive design means a website or app automatically adjusts and looks good on all screen sizes and devices",
                },
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <h1 className="text-4xl font-bold text-pink-600 mr-4">
                    {feature.num}
                  </h1>
                  <div className="bg-white shadow-lg p-4 flex-1">
                    <h1 className="text-lg font-bold">{feature.title}</h1>
                    <p className="py-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2 md:pl-8">
              <img
                src={img}
                alt="Features"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="bg-black text-white py-16 px-4 font-serif" style={{ marginLeft: !isMobile && isSticky && showSidebar ? '16rem' : '0' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h6 className="text-pink-600" id="portfolio">PORTFOLIO</h6>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4">
              OUR WORKS
            </h1>
            <p className="mt-4">
              A portfolio is a collection of our best work, projects, and achievements,
              <br />
              shown to demonstrate our skills, creativity, and experience.
            </p>
          </div>
          
               <div className="mt-8 flex flex-wrap justify-center gap-2">
        {["All", "Design", "Advertising", "UserExpirience", "Branding"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => setActive(item)}
              className={`h-10 px-4 flex items-center cursor-pointer ${
                active === item ? "bg-pink-600" : "hover:bg-pink-600"
              }`}
            >
              <a href="#index" className="text-white">
                {item}
              </a>
            </div>
          )
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images
          .filter(
            (img) => active === "All" || img.category === active
          )
          .map((port, index) => (
            <div key={index} className="relative group">
              <img
                src={port.src}
                alt={`Portfolio ${index + 1}`}
                className="w-80 h-80"
                id="index"
              />
              <div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-50 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                <button className="bg-pink-600 text-white px-6 py-2 hover:bg-white hover:text-pink-600 transition mt-80">
                  <a href="#">View More</a>
                </button>
              </div>
            </div>
          ))}
      </div>
        </div>

        {/* Testimonials Section */}
        <div className="p-4 md:p-10 relative font-serif" style={{ marginLeft: !isMobile && isSticky && showSidebar ? '16rem' : '0' }}>
          <h6 className="text-pink-600">OUR</h6>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2" id="testimonials">
           THOUGHTS
          </h1>

          <div className="mt-10 md:flex">
            <div className="md:w-1/3 flex justify-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt="Author"
                className="w-32 h-32 rounded-full object-cover"
              />
            </div>

            <div className="mt-8 md:mt-0 md:w-2/3 md:pl-8">
              <div className="flex justify-center md:justify-start">
                <img src={quot} alt="Quotes" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mt-4 text-center md:text-left">
                {testimonials[currentTestimonial].name}
              </h3>
              <span className="text-sm text-center md:text-left block">
                {testimonials[currentTestimonial].role}
              </span>
              <p className="mt-4 font-bold text-lg text-center md:text-left">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex justify-center md:justify-start mt-4">
                <img src={sign} alt="Signature" />
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="h-10 w-10 text-white bg-black flex items-center justify-center hover:bg-pink-600 transition"
            >
              <span className="ml-1">&#10094;</span>
            </button>
            <button 
              onClick={nextTestimonial}
              className="h-10 w-10 text-white bg-black flex items-center justify-center hover:bg-pink-600 transition"
            >
              <span className="ml-1">&#10095;</span>
            </button>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-black text-white py-16 px-4 font-serif" style={{ marginLeft: !isMobile && isSticky && showSidebar ? '16rem' : '0' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h6 className="text-pink-600">OFFERS</h6>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4" id="pricing">
              THE BEST PRICE
            </h1>
            <p className="mt-4">
             The best price means a price that is fair, reasonable, and offers good value for the quality of the product or service.
              <br />
             satisfiIt’s neither too high nor too low — just the right balance where both the buyer and seller feeed.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: home1,
                title: "Standard",
                price: "$49",
                period: "Per Packet",
                features: [
                "DELIVERING consistent excellence.",
                "UPHOLDING trusted standards.",
                "ENSURING fairness in every dea.",
                "SETTING benchmarks for quality.",

                ],
              },
              {
                icon: home2,
                title: "Business",
                price: "$99",
                period: "Per Packet",
                features: [
                 "BUILDING strong relationships.",
                "INNOVATING with purpose.",
               "SERVING with integrity.",
               "GROWING together with our customers.",
                ],
              },
              {
                icon: home3,
                title: "Premium",
                price: "$149",
                period: "Per Packet",
                features: [
                 "OFFERING unmatched quality.",
                 "DESIGNING memorable experiences.",
                 "COMMITTED to perfection.",
                 "EARNING loyalty with every step.",

                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className="bg-white text-black p-8 rounded-lg relative"
              >
                <div className="w-24 h-24 rounded-full bg-white shadow-lg absolute -top-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <img src={plan.icon} alt={plan.title} className="w-12 h-12" />
                </div>
                <h2 className="text-2xl font-bold text-center mt-12 mb-4 relative inline-block">
                  <span className="relative z-10">{plan.title}</span>
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-pink-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                </h2>
                <p className="text-center mb-6">
                The best price standard refers to a guideline or benchmark used to determine the most fair and reasonable price for a product or service, considering its quality, market value, and customer satisfaction.
                </p>
                <div className="text-center mb-6">
                  <a
                    href="#"
                    className="font-bold text-4xl hover:text-pink-600"
                  >
                    {plan.price}
                    <sup>99</sup>
                  </a>
                  <p>{plan.period}</p>
                </div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-black text-white py-2 hover:bg-pink-600 transition">
                  BUY IT NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      <div
      className="p-4 md:p-10 font-serif"
      style={{
        marginLeft: !isMobile && isSticky && showSidebar ? "16rem" : "0",
      }}
    >
      <h6 className="text-pink-600">CUSTOMERS</h6>
      <h1 className="text-4xl font-black mt-2" id="client">
        CLIENTS
      </h1>

      {/* Clients Grid */}
      <div className="mt-10 flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {visibleClients.map((client, index) => (
            <a
              key={index}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg p-4 flex items-center justify-center transition-transform duration-300 hover:scale-90"
            >
              <img
                src={client.img}
                alt={`Client ${index + 1}`}
                className="w-full h-auto max-h-30 object-contain"
              />
            </a>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-3 w-3 rounded-full ${
                currentPage === index
                  ? "bg-pink-600"
                  : "bg-gray-300 hover:bg-pink-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>

        {/* Team Section */}
        <div className="bg-black text-white py-16 px-4 font-serif" style={{ marginLeft: !isMobile && isSticky && showSidebar ? '16rem' : '0' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h6 className="text-pink-600">WORKERS</h6>
            <h1 className="text-4xl md:text-5xl font-bold mt-4" id="team">
              THE BEST TEAM
            </h1>
            <p className="mt-4">
             The best team is one that works together with trust, respect, and a shared goal.
              <br />
              The best team supports each other and achieves success through unity and collaboration.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: team1, name: "Ashish", role: "Web-Designer" },
              { img: team2, name: "Versha", role: "Graphic Designer" },
              { img: team1, name: "Anil", role: "Full Stack Developer" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-80 h-80"
                />
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-xl font-bold hover:text-pink-600"
                  >
                    {member.name}
                  </a>
                  <p className="text-white mt-2">{member.role}</p>
                </div>
                <div className="flex justify-center space-x-4 text-xl text-white mt-4">
             <a href="https://www.facebook.com/jbhtechinnovation"><FaFacebookF className="hover:text-pink-500 cursor-pointer" /></a>
                <a href="https://www.instagram.com/jbh_webstics"> <FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
                <a href="https://www.linkedin.com/company/jbh-tech-innovation/"> <FaLinkedin className="hover:text-pink-500 cursor-pointer" /></a>
                <a href="https://x.com/DigitalJbhk"> <FaTwitter className="hover:text-pink-500 cursor-pointer" /></a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-4 md:p-10 font-serif" style={{ marginLeft: !isMobile && isSticky && showSidebar ? '16rem' : '0' }}>
          <h6 className="text-pink-600" id="contact">CONTACT</h6>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">KEEP IN TOUCH</h1>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src={icon8} alt="Address" className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Address</h3>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-pink-600 cursor-pointer">
                  Address: 357-A 1st floor, Bhoor Colony, Sector 29,
                </li>
                <li className="hover:text-pink-600 cursor-pointer">
                   Badkal Road, Faridabad Haryana 121002
                </li>
                <li className="hover:text-pink-600 cursor-pointer">FL 33401</li>
              </ul>
            </div>
            <div className="text-center">
              <img src={icon9} alt="Phone" className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold mt-4">Phone</h3>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-pink-600 cursor-pointer">
                  +91 99 90 14 58 58
                </li>
                <li className="hover:text-pink-600 cursor-pointer">
                  +91 70 42 78 83 93
                </li>
              </ul>
            </div>

            <div className="text-center">
              <img src={icon10} alt="Email" className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-bold mt-4">E-mail</h3>
              <ul className="mt-2 space-y-1">
                <li className="hover:text-pink-600 cursor-pointer">
                jbh.webstics@gmail.com
                </li>
                <li className="hover:text-pink-600 cursor-pointer">
                support@jbhtechinnovation.com
                </li>
              </ul>
            </div>
          </div>


          {/* Contact Form */}
          <div className="mt-10 bg-white shadow-lg p-6 max-w-3xl mx-auto font-serif">
            <h2 className="text-2xl font-bold mb-6">
              Do you have any question?
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full outline-none border-b border-gray-300 focus:border-pink-600 p-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none border-b border-gray-300 focus:border-pink-600 p-2"
                />
              </div>
              <textarea
                placeholder="Message"
                className="w-full outline-none border-b border-gray-300 focus:border-pink-600 p-2 h-24"
              ></textarea>
              <button className="bg-black text-white px-8 py-2 hover:bg-pink-600 transition mt-4">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>


        {/* Instagram Gallery */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" style={{ marginLeft: !isMobile && isSticky ? '16rem' : '0' }}>
          {[port1, port2, port3, port4, port5, port6].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Instagram ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>

        {/* Map */}
        <div className="mt-10" style={{ marginLeft: !isMobile && isSticky ? '16rem' : '0' }}>
          <iframe
            className="w-full h-64 md:h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.794362831062!2d77.29806295!3d28.4022201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb1e486911f1%3A0x27cfdc9dfd7de52e!2sSector%2029%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1688482335012!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        {/* Footer */}
        <div className="bg-black text-white py-8 px-4" style={{ marginLeft: !isMobile && isSticky ? '16rem' : '0' }}>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-xl font-bold font-serif">
                © 2025 All rights reserved. Development with ❤ by
                <br />
                JBH Tech.
              </h1>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
              <h4 className="text-pink-600">Follow me:</h4>
              <div className="flex space-x-4 text-xl">
               <a href="https://www.facebook.com/jbhtechinnovation"><FaFacebookF className="hover:text-pink-500 cursor-pointer" /></a>
               <a href="https://www.instagram.com/jbh_webstics">  <FaInstagram className="hover:text-pink-500 cursor-pointer" /></a>
              <a href="https://www.linkedin.com/company/jbh-tech-innovation/"> <FaLinkedin className="hover:text-pink-500 cursor-pointer" /></a>
                <a href="https://x.com/DigitalJbhk"> <FaTwitter className="hover:text-pink-500 cursor-pointer" /></a>
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;