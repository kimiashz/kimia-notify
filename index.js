function get(){
  return  Promise.resolve({ data: 'response' })
  .then(({ data }) => data )
  .catch((err) => {
    console.log(err);
  });
}
module.exports = async function getContests() {
  const result = await get();
      
  return result;
};