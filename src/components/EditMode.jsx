const EditMode = ({ todo, setIsEditMode, handleEdit }) => {
  return (
    <form
      onSubmit={handleEdit}
      className="d-flex justify-content-between align-items-center w-100 gap-3"
    >
      <select defaultValue={todo.status} className="form-select shadow w-50">
        <option value="default">Varsayılan</option>
        <option value="important">Önemli</option>
        <option value="job">İş</option>
        <option value="daily">Günlük</option>
      </select>
      <input
        defaultValue={todo.title}
        className="form-control shadow"
        type="text"
      />
      <div className="btn-group">
        <button type="submit" className="btn btn-success btn-sm">
          Onayla
        </button>
        <button
          type="button"
          onClick={() => setIsEditMode(false)}
          className="btn btn-secondary btn-sm"
        >
          İptal
        </button>
      </div>
    </form>
  );
};
export default EditMode;
