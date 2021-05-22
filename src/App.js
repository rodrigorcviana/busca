import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
    </div>
    /** 
    <div className="App">
      <div>
        <Sidebar/>
      </div>
      <div>
        <div>
          <Pesquisa/>
        </div>
        <div>
          <div>
            <h3>Visão Geral</h3>
            <Cards/>
          </div>
          <div>
            <h3>Clientes Cadastrados</h3>
            <Clientes/>
          </div>
        </div>
      </div>
    </div>
    */
  );

}

export default App;
