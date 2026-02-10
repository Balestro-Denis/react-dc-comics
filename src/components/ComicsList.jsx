import comics from "../data/comics";
function ComicsList() {
  return (
    <div className="comics-section">
      <div className="comics-container">
        {comics.map((comic) => (
          <div className="comic-card" key={comic.id}>
            <img src={comic.thumb} alt={comic.title} />
            <h3>{comic.title}</h3>
          </div>
        ))}
      </div>
      <button className="load-more">LOAD MORE</button>
    </div>
  );
}
export default ComicsList;
