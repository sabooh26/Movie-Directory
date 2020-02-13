class UI {
  constructor(){
    this.description = document.querySelector('#movie');
    this.searchInput = document.querySelector('#search-input');
  }
  showMovie(movie){
    console.log(this.description);
    this.description.innerHTML = 
      `
      <div class="card card-body mb-3">
        <ul class="list-group">
          <li class="list-group-item">Title: ${movie.Title}</li>
          <li class="list-group-item">Cast: ${movie.Actors}</li>
          <li class="list-group-item">Director: ${movie.Director}</li>
          <li class="list-group-item">Genre: ${movie.Genre}</li>
          <li class="list-group-item">Rotten Tomatoes: ${movie.Ratings[1] ? movie.Ratings[1].Value : 'N/A'}</li>
          <li class="list-group-item">Release: ${movie.Year}</li>
        </ul>
      </div>
      `;
    this.clearInput();
  }
  movieRating(){

  }
  clearInput(){
    this.searchInput.value = '';
  }
  showError(msg,className){
    const error = document.createElement('div');
    error.className = className;
    error.appendChild(document.createTextNode(msg));
    const container = document.body;
    const front = document.querySelector('#searchContainer');
    container.insertBefore(error,front);
    setTimeout(()=>{
      this.removeError();
    },2000)
  }
  removeError(){
   document.querySelector('.alert').remove();
  }
}