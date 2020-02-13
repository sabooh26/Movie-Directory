class OBDB{
  constructor(){
    this.apiKey = '1d2af7d9';
    
  }
  async getData(title){
    const api = `http://www.omdbapi.com/?t=${title}&apikey=${this.apiKey}`;
    const call = await fetch(api);
    const response = await call.json();
    return{
      response
    }
  }
  
}