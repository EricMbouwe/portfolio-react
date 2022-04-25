import MainSide from './components/MainSide';
import ScrollSide from './components/ScrollSide';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faExclamationCircle, faCheckCircle, faSpinner, faFileDownload } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faExclamationCircle, faCheckCircle, faSpinner, faFileDownload);

function App() {
  return (
    <div className="d-lg-flex">
      <MainSide />
      <ScrollSide />
    </div>
  );
}

export default App;
