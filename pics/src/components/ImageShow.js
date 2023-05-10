function ImageShow({image}){
    const {id,urls,alt_description} = image;
    return(<div id={id}>
      <img src={urls.small} alt={alt_description}  />  
    </div>)
}

export default ImageShow;