
import './App.css';//we can change the css file as normally
import About from './components/About';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
  <>
<Navbar title="TextUtils"/>
{/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
{/* if you don't pass any value here than the default props will work */}
<div className="container my-3">
<TextForm heading="Write For Your Own Happiness!"/>

<About/>
</div>
 </>
  );
  
}

export default App;
