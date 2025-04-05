export default function loadItem({ params }) {
  const data = JSON.parse(localStorage.getItem("myData")) || [];
  return data.find((item) => +item.id == params.itemid);
}
