import Contact from "./Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
