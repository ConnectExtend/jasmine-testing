describe('Address Book', () => {
    const addressBook;
    const thisContact;

    beforeEach(() => {
        addressBook = new AddressBook();
        thisContact = new Contact();
    });

    it('should be able to add a contact', () => {
        addressBook.addContact(thisContact);

        expect(addressBook.getContact(0)).toBe(thisContact);
    });

    it('should be able to delete a contact', () => {
        addressBook.addContact(thisContact);
        addressBook.deleteContact(0);

        expect(addressBook.getContact(0)).not.toBeDefined();
    });
});

describe('Asyn Address Book', () => {
    it('should grab initial contacts', () => {
        const addressBook = new AddressBook();

        addressBook.getInitialContacts();

        expect(addressBook.initialComplete).toBe(true);
    });
});
