import styles from "./ContactHeader.module.css";
const ContactHeader = () => {
  return (

    <div className={`${styles.contact_section}`}>
      <h1>Contáctanos</h1>
      <p>
        Aquí encontrarás nuestros canales de atención para poder ayudarte.{" "}
      </p>
    </div>
  );
};

export default ContactHeader;