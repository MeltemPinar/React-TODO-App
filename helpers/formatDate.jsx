//tarihi alır ve geriye ay/ gün formatına döndür
const formatDate = (dateStr) => {
  const date = dateStr.split(".");

  //formatlayıp döndür
  return date[0] + "/" + date[1];
};
export default formatDate;
