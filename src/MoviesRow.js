import React from 'react'


class MoviesRow extends React.Component{

    viewMovie(){
        window.location.href = "https://www.themoviedb.org/movie/" + this.props.moviie.id
    }
    render(){
        return <table key = {this.props.moviie.id}>
        <tbody>
          <tr>
            <td>
              <img src alt = "logo" width = "100" src ={this.props.moviie.poster_src}/>
            </td>  
            <td>
              <h3>{this.props.moviie.title}</h3>
              <p>{this.props.moviie.overview}</p>
              <input type = "button" value = "View" onClick = {this.viewMovie.bind(this)}/>
            </td>
          </tr>
        </tbody>  
      </table>
    }
}


export default MoviesRow