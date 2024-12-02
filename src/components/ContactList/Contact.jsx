import styles from "./Contact.module.css";
import { FaUser, FaPhone } from "react-icons/fa";

const Contact = ({ name, number, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      <div className={styles.userInfo}>
        <div className={styles.contactInfo}>
          <FaUser className={styles.contactIcon} />
          <p className={styles.contactName}>{name}</p>
        </div>
        <div className={styles.contactInfo}>
          <FaPhone className={styles.contactIcon} />
          <p className={styles.contactNumber}>{number}</p>
        </div>
      </div>
      <button className={styles.deleteButton} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
