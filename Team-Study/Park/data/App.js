import { useEffect, useState } from 'react';
import './App.css';
import PhotoList from './components/photo_list/photo_list';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then(response => response.json())
    .then(result => setPhotos(result))
    .catch(error => console.log('error'. error))  
  }, [])
  return (
    <PhotoList photos={photos} />
  );
}

export default App;