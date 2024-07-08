import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Homes from './Pages/Homes';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Produk from './Pages/Produk';
import Counter from './Components/Counter';
import TextInput from './Components/TextInput';
import Timer from './Components/Timer';
import { ThemeProvider } from './Context/ThemeContext';
import ThemedComponent from './ThemedComponent';
import { Provider } from 'react-redux';
import store from './store';
import Button from 'react-bootstrap/Button';


  function App() {
  return(
    
    <div>
      <div className='contianer'>
      <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/product/montor">Product Montor</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Produk />} />
      </Routes>
    </Router>
    
      </div>
      <center>
      <h1>TUGAS SISI KLIEN</h1>
      <p>
        NAMA : GABRIEL SEPTIO RIVALDI GULTOM
      </p>
      <p>
        NIM : A11.2021.13525  
      </p>
      <p>
        ini adalah Bootstrap yagesyak
      </p>
      <Button variant="danger">Pencet</Button>{' '}
      </center>
      <Props
          judul="INI BAGIAN PROPS"
          penulis="tidak diketahui"
          deskripsii="cerita seseorang yang gapapa"
        />
      <div>
        <h1>INI ADALAH FUNGSI STATE</h1>
        <State />
      </div>
       <div>
        <h1>FETCH API</h1>
        <FetchApi />
       </div>
       
       <div>
        <center>
          <h1>ini adalah Redux</h1>
          <Provider store={store}>
          <Counter />
        </Provider>
        </center>
          </div>


      <div>
        <h2>hook-Counter</h2>
        <Counter />
      </div>

      <div>
        <h2>hook-TextInput</h2>
        <TextInput />
      </div>

      <div>
        <h2>hook-Timer</h2>
        <Timer />
      </div>
     
     <div>
      <h1>INI ADALAH Context API</h1>
      <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>
     </div>
      </div>
       
    
  );
  }
  function Props({judul, penulis, deskripsii}){
    return(
      <div>
        <h1>{judul}</h1>
          <div>
            <b>Penulis : {penulis}</b>
          </div>
          <div>
            {deskripsii}
          </div>
      </div>
    )
  }

 function State(){
  const[isVisible, SetIsVisible] = useState(true);
  const toogleVisibility = () => {
     SetIsVisible(!isVisible);
  };
  return(
    <div>
      <button onClick={toogleVisibility}>ciluk</button>
      {isVisible&&<h3>Baa</h3>}
    </div>
  );
 }

 function FetchApi(){
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=>{
      setUsers(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }, []);

  const handleSubmit = (event) => {
    event.prevenDefault();
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
    .then(response => response.json())
    .then(data =>{
      setUsers([...users, data]);
      setName('');
      setEmail('');
    })
    .catch(error => {
      console.error('Error adding user:', error);
    });;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return(
    <div>
      <h1>Daftar Pengguna</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h1>Tambahkan Pengguna</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Tambahkan</button>
      </form>
    </div>
  );
}

export default App;