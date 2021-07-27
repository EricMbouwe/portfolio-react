import MainSide from './components/MainSide';
import ScrollSide from './components/ScrollSide';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="d-lg-flex">
      <MainSide />
      <ScrollSide />
    </div>
  );
}

export default App;
