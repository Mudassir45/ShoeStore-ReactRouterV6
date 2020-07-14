import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Launch">Launch</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Launch' element={<Launch />}>
          <Route path='/' element={<LaunchIndex />}/>
          <Route path=':Key' element={<LaunchShoe />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return(
    <div>
      <h2>Welcome to Home Page!</h2>
    </div>
  )
}

function Launch() {
  return(
    <div>
      <h2>Launch!</h2>

      <Outlet />
    </div>
  )
}

function LaunchIndex() {
  return(
    <ul>
      {Object.entries(shoes).map(([Key, { name, img }])=> (
        <li key={Key}>
          <Link to={`/Launch/${Key}`} >
          <h2>{name}</h2>
          <img src={img} alt={name}/>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function LaunchShoe() {
  const { Key } = useParams();
  const shoe = shoes[Key];

  if(!shoe) {
    return <h2>Not Found!</h2>
  }

  const { name, img } = shoe;

    return(
      <div>
        <h1>{ name }</h1>
        <img src={img} alt={name} />
      </div>
    )
};

function NotFound() {
  return(
    <div>
      <h2>Not Found!</h2>
      <p>Sorry your page was not found!!</p>
    </div>
  )
}

export default App;

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};