import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    console.error('Error in asyncUploadUser:', error);
    return { photo: null, user: null };
  }
}

export default asyncUploadUser;
