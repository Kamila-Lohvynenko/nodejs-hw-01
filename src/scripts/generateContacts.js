import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    console.log({ contacts });
    const newContacts = [];
    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }
    const updatedContacts = [...contacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log(`${number} contacts were added`);
  } catch (error) {
    console.log({ error });
  }
};

generateContacts(5);
