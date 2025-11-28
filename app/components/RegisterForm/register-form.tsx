'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  message: string;
  selectedProgram: 'stemprep' | 'bizprep' | null;
}

export default function RegisterForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    program: '',
    message: '',
    selectedProgram: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // EmailJS Configuration - Get from environment variables
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === 'first-name' ? 'firstName' : id === 'last-name' ? 'lastName' : id]: value,
    }));
  };


  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your first name' });
      return false;
    }
    if (!formData.lastName.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your last name' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address' });
      return false;
    }
  
    if (!formData.program) {
      setSubmitStatus({ type: 'error', message: 'Please select a program' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Check if EmailJS credentials are configured
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not configured. Please contact the administrator.',
      });
      console.error('EmailJS credentials are missing. Please check your .env.local file.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        program: formData.program === 'stemprep' ? 'STEMPrep' : 'BizPrep',
        message: formData.message || 'No message provided',
        to_email: 'info@uniprep101.com', // Your receiving email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Save to database via API
      const dbResponse = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone || null,
          country: formData.country || null,
          program: formData.program === 'stemprep' ? 'STEMPrep' : 'BizPrep',
          message: formData.message || null,
        }),
      });

      if (!dbResponse.ok) {
        const errorData = await dbResponse.json();
        console.error('Database save error:', errorData);
        
        // Show error to user
        setSubmitStatus({
          type: 'error',
          message: errorData.error || 'Failed to save registration. Please try again or contact us directly.',
        });
        setIsSubmitting(false);
        return;
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your registration has been submitted successfully. We will contact you soon.',
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        program: '',
        message: '',
        selectedProgram: null,
      });

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your form. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <h1 className="text-center text-3xl font-extrabold text-navy sm:text-4xl">
          Register Your Interest
        </h1>

        

        <p className="text-center text-sm font-medium text-[#4B5875] sm:text-base">
        Only students from Grades 10- 12 are eligible to apply for these programs. A video call will be scheduled with all candidates prior to final confirmation and payment.
        </p>
      </div>

      {/* Status Message */}
      {submitStatus.type && (
        <div
          className={`mt-6 rounded-lg p-4 ${
            submitStatus.type === 'success'
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <p className="text-sm font-medium">{submitStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy" htmlFor="first-name">
            First Name *
          </label>
          <input
            id="first-name"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            required
            className="w-full rounded-[4px] bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy" htmlFor="last-name">
            Last Name *
          </label>
          <input
            id="last-name"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            required
            className="w-full rounded-[4px] bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
            className="w-full rounded-[4px] bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy" htmlFor="phone">
            Phone Number 
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91 98765 43210"
       
            pattern="^\+?[1-9]\d{1,14}$"
            title="Please enter a valid phone number"
    
            className="w-full rounded-[4px] bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy" htmlFor="country">
            Country 
          </label>
          <select
            id="country"
            value={formData.country}
            onChange={handleInputChange}
    
            className="w-full rounded-[4px] bg-[#0000000D] px-4 py-3 text-black"
          >
            <option value="">Select your country</option>
            <option value="india">India</option>
            <option value="singapore">Singapore</option>
            <option value="usa">United States</option>
            <option value="thailand">Thailand</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-navy" htmlFor="program">
            Program of Interest *
          </label>
          <select
            id="program"
            value={formData.program}
            onChange={handleInputChange}
            required
            className="w-full rounded-[4px] bg-[#0000000D] px-4 py-3 text-black"
          >
            <option value="">Select a program</option>
            <option value="stemprep">STEMPrep</option>
            <option value="bizprep">BizPrep</option>
            <option value="both">Both</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-sm font-semibold text-navy" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your interests, questions, or any specific requirements..."
            className="w-full rounded-[4px] bg-[#0000000D] px-4 py-3 text-black placeholder:text-[#94A0B8]"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex lg:w-1/4 w-full mx-auto cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2 text-base font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6668 1.33331L7.3335 8.66665"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.6668 1.33331L10.0002 14.6666L7.3335 8.66665L1.3335 5.99998L14.6668 1.33331Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

