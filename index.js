module.exports = async function getContests() {
  const result;
  
    await Promize.resolve({ data: 'response' })
      .then(({ data }) => {
        result = data;
      })
      .catch((err) => {
        console.log(err);
      });
    
    return result;
};