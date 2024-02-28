import { v4 } from "uuid";
import axios from "axios";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;
    if (!title) {
      return alert("Lütfen başlık yazınız");
    }
    //veritabanından eklenecek veriyi hazırla
    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };
    //oluşturduğumuz todoyu api ye kaydet
    axios
      .post("http://localhost:3000/todos", newTodo)
      .then(() => setTodos((todos) => [...todos, newTodo]))
      .catch(() => alert("üzgünüz bir sorun oluştu"));
    e.target.reset();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        placeholder="ör: React projesi yap"
        className="form-control shadow"
        type="text"
      />
      <select className="bg-light text-dark shadow border">
        <option value="daily">Günlük</option>
        <option value="important">Önemli</option>
        <option value="job">İş</option>
      </select>
      <button type="submit" className="btn btn-primary shadow">
        Gönder
      </button>
    </form>
  );
};
export default Form;
