const omdb = new OBDB;
const ui = new UI;
const form = document.querySelector('#submitForm');
const searchInput = document.getElementById('search-input');

form.addEventListener('submit',searchData);
function searchData(e){
let searchValue = searchInput.value;
if(searchValue === '' ){
  alert('Enter a Movie Title');
}else{
  omdb.getData(searchValue).then(data=>{
   if(data.response.Response !== 'False'){
    //show data in ui
    console.log(data);
    ui.showMovie(data.response);
   }else{
     //show error in ui
     console.log('error');
     ui.showError('Invalid Movie Title','container alert alert-danger');
     
   }
  })
}

  e.preventDefault();
}