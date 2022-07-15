import { motion } from "framer-motion";
import { Button, Heading } from "../../components/ui";
import { section } from "../../js/animation";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={section}
    >
      <Heading text="What's Next ?" className="contact-numbered-heading" />
      <h3 className="contact-title">Get In Touch</h3>
      <p className="contact-text">
        <span className="notice">
          Currently, I am looking for an opportunity as a front-end developer.
        </span>{" "}
        Also, if you have any question or just wanted to say hi, my inbox is
        always open.
      </p>
      <Button
        path="mailto:wassim.j.itani@gmail.com"
        text="Contact Me"
        external
        size="lg"
      />
    </motion.section>
  );
};

export default Contact;
