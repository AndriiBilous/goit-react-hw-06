import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilter } from '..//../redux/filtersSlice';
import { selectItem } from '..//../redux/contactsSlice';

function ContactList() {
    const filters = useSelector(selectFilter);
    const contacts = useSelector(selectItem);
    //=============================Filter=================================
    const contactFilter = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase()),
    );
    return (
        <ul className={css.container}>
            {contactFilter.map(item => {
                return (
                    <li key={item.id}>
                        <Contact items={item} />
                    </li>
                );
            })}
        </ul>
    );
}
export default ContactList;
