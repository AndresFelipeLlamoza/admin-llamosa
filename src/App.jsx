import Navbar from './Components/Navbar';
import {PropsButton} from './Hooks/UseButton.js';

export default function App() {
  const {btncontent}=PropsButton()
  return (
    <div>
      <Navbar datos={btncontent}/>
    </div>
  )
}
