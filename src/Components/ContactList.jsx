import { Contact } from "../models/Contact";
import { ContactItem } from "./ContactItem";

const ContactList = () => {
  const firstContact = new Contact(
    "Francisco",
    "Perez",
    "francisco@gmail.com",
    true
  );
  return (
    <>
      <ContactItem props={firstContact} />
    </>
  );
};

export default ContactList;
