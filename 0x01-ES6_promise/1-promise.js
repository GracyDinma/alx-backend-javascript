const getFullREsponseFromAPI = (success) => {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('THe Fake API is not working currently'));
    }
  });
};

export default getFullResponseFromAPI;
