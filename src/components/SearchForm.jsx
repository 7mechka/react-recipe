function SearchForm({ submitHandler, inputHandler }) {
  return (
    <>
      <form
        onSubmit={() => {
          submitHandler();
        }}
      >
        <input type="text" name="queryString" onInput={() => inputHandler()} />
        <button>search</button>
      </form>
    </>
  );
}
export default SearchForm;
