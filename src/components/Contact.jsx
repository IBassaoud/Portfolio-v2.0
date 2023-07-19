import {useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef();
  const [form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({...form, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_ky8nzdn',
      'template_tiopq5a',
      {
        from_name: form.name,
        to_name: 'Ismail',
        from_email: form.email,
        to_email: 'ismail.bassaoud@gmail.com',
        message: form.message
      },
      'VkfjMhxJWhbJkvCYr' // TODO: Enter here the API PUBLIC KEY emailjs
      )
      .then( () => {
        setLoading(false);

        setForm({
          name: '',
          email: '',
          message: '',
        })
        
      }, (error) => {
        setLoading(false);

        console.log(error);


      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email ?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me more about how we can collaborate"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium custom-scrollbar"
              style={{ maxHeight: '16em', minHeight: '10em' }}
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
