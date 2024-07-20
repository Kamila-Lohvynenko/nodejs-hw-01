import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    const updatedContacts = [...contacts, newContact];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('One contact was added');
  } catch (error) {
    console.log({ error });
  }
};

addOneContact();
