
describe('Address Book', () => {
        let addressBook;
        let thisContact;

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

describe('Async Address Book', () => {
    var addressBook = new AddressBook();

    beforeEach(function(done) {
        addressBook.getInitialContacts(function() {
            done();
        });
    });

    it('should grab initial contacts', function(done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});
