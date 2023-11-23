"use client"
import ReCAPTCHA from 'react-google-recaptcha';
import React, { useState, useRef, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { ReCAPTCHA as ReCAPTCHAType } from 'react-google-recaptcha';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added subject field
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const recaptchaRef = useRef<ReCAPTCHAType>(null);

    // Reset reCAPTCHA when form is successfully submitted
    const resetCaptcha = () => {
        if (recaptchaRef.current) {
            setRecaptchaValue(null);
            recaptchaRef.current.reset();
        }
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!recaptchaValue) {
        toast.error('Please verify you are not a robot.');
        return;
    }
  
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        toast.error('Please fill in all fields.');
        return;
    }
  
    // Preparing data to be sent
    const dataToSend = {
      ...formData,
      recaptcha: recaptchaValue
    };
  
    setIsLoading(true);

    try {
      const response = await fetch('/api/send_contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
  
      setIsLoading(false);
      if (response.ok) {
        toast.success('Message sent successfully!');
        resetCaptcha();
      } else {
        // Handle errors if response is not ok
        const errorData = await response.json();
        toast.error(`Error sending message: ${errorData.error}`);
      }
    } catch (error) {
      // Handle network errors
        toast.error('Error sending message. Please try again.');

    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
        {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-2xl z-50">
            <div className="loader my-3"></div>
            Sending...
        </div>
        )}
        <ToastContainer position="bottom-right" />
        <div className="flex justify-center items-center min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
                {/* Form Section */}
                <div className="p-8 contact-form">
                    <form onSubmit={handleSubmit} className="bg-gray-800 shadow-xl rounded-lg px-8 pt-6 pb-8">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="custom-focus border p-3 mb-4 w-full rounded"
                            autoFocus 
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="custom-focus border p-3 mb-4 w-full rounded"
                        />
                        <input // Subject input field
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="custom-focus border p-3 mb-4 w-full rounded"
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message"
                            className="custom-focus border p-3 mb-4 w-full rounded h-40 resize-none"
                        ></textarea>
                        <div className="flex justify-center mb-4">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6LdyRBopAAAAAHlTb_93ylps-7zsg3AJRIJNtKMF"
                                onChange={(value: any) => setRecaptchaValue(value)}
                            />
                        </div>
                        <button type="submit" className="rounded-lg px-5 py-2.5 items-center p-2 mt-4 w-full
                                              text-center text-white font-bold text-lg bg-gradient-to-r
                                              from-purple-500 via-purple-600 to-purple-700 
                                              hover:bg-gradient-to-br 
                                              focus:ring-4 focus:outline-none focus:ring-purple-300
                                              dark:focus:ring-purple-800">
                            Send Message
                        </button>
                    </form>
                </div>
                {/* Map Section */}
                {!isMobile && (
                    <div className="p-8">
                        <iframe
                            title="Our Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23577.71581623809!2d-70.98504008333519!3d42.38057730733057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e36e529f580fb7%3A0x8f4289ed542932a3!2sWinthrop%2C%20MA!5e0!3m2!1sen!2sus!4v1700758699382!5m2!1sen!2sus" // Replace with your Google Maps embed URL
                            width="100%"
                            height="490"
                            style={{ border: 0 }}
                            className="rounded-lg w-full h-[500px] lg:h-full"
                            loading="lazy">
                        </iframe>
                    </div>
                )}
            </div>
        </div>
        <style jsx>{`
        .custom-focus {
          border: 2.5px solid transparent;
          transition: border-color 0.2s ease-in-out;
        }
        .custom-focus:focus {
          outline: none;
          animation: focus-border-animation 0.3s forwards;
        }
        @keyframes focus-border-animation {
          0% {
            border-color: transparent;
          }
          100% {
            border-color: #805ad5;
          }
        }

        .loader {
            border: 5px solid #f3f3f3; /* Light grey */
            border-top: 5px solid #805ad5; /* Purple */
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .contact-form {
            width: 100%; /* Ensure form takes full width when map is not rendered */
          }

      `}</style>
    </>
  );
};

export default ContactUs;
