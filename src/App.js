import logo from './logo.svg';
import './App.css';
// import "./assets/css/modal3.css"
// import "./assets/css/modal2.css"
import "./assets/css/style.css"
// import "./assets/css/main.css"
import "./assets/bootstrap/css/bootstrap.min.css"
import AppRouter from './routers';

function App() {
  return (
    <section className="parent-main" style={{ height: "100vh" }}>
      <AppRouter />
    </section>
  );
}

export default App;
