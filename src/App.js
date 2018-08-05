import React, { Component } from 'react';
import './App.css';
import MoviesRow from './MoviesRow';
import $ from 'jquery';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {}
    this.performSearch("woman")
    // const movies = [
    //   {id:0,title:"This one is first movie title",overview:"When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power."},
    //   {id:1,title:"This is second moview title",overview:"When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power."},
    // ]

    // var moviewRows = []
    // movies.forEach((movie)=>{
    //   const moviewrow = <MoviesRow moviie={movie}/>
    //   moviewRows.push(moviewrow)
    // })
    // this.state = {rows:moviewRows}

  }


  performSearch(searchTerm){
    var urlString = "https://api.themoviedb.org/3/search/movie?&api_key=98304107da83574cdac9140d458dce3d&query=" + searchTerm
    $.ajax({
      url:urlString,
      success:(searchResult)=>{
        const result = searchResult.results

        var moviesRows = []

        result.forEach(movie => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const moviewrow = <MoviesRow key = {movie.id} moviie={movie}/>
          moviesRows.push(moviewrow)
        });
        this.setState({rows:moviesRows})
      },
      error:(xhr,status,err)=>{
        console.log("failed to load data")
      }
    })

  }

  searchChangehandler(event){
    const boundObject = this
    const searchTerm = event.target.value
    this.performSearch(searchTerm)

  }


  render() {
    return (
      <div className="App">
        <table className="titlebar"> 
          <tbody>
            <tr>
              <td>
                <img src alt = "logo" width = "50" src = "logo-png.png"/>
              </td>  
              <td width="8"/>
              <td>
                <h1>
                  MoviesDB Search
                </h1>
              </td>  
            </tr>
          </tbody>
        </table>

        <input style = {{
          fontSize:24,
          display:'block',
          width:'99%',
          paddingTop:8,
          paddingBottom:8,
          paddingLeft:16,
        }} onChange = {this.searchChangehandler.bind(this)} placeholder = "Enter Search term"/>
        {this.state.rows}

      </div>
    );
  }
} 
export default App;
