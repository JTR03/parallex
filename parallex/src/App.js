import Text from './images/Text.png'
import './App.css';
import {useState} from 'react'

function App() {
  const [state, setState] = useState()

  const handleScroll = ()=> {
    setState(window.pageYOffset)
  }

  window.addEventListener('scroll',handleScroll)

  return (
    <div className="App">
    <div className='container'>
      <img src={Text} alt='' id='text' 
      style={{top:`-${10 + state * 0.1 +'%'}`}}/>
    </div>
    <div className='content '>
      <h2>Parralel effect</h2>
      <p>
        Proident ad adipisicing aliqua cillum sunt. Nostrud nostrud aliquip cillum sunt labore eiusmod. Ipsum ut eiusmod sunt adipisicing commodo. Occaecat officia incididunt magna proident nostrud.

Cillum incididunt Lorem et consectetur magna et non. Magna et reprehenderit sint ad. Ullamco laborum laboris ipsum pariatur voluptate amet laboris aute consectetur officia do. Anim non aute dolor commodo ipsum aliqua id dolor. Incididunt amet veniam officia deserunt quis et nostrud velit.

Sit nostrud officia do dolor nulla exercitation incididunt ad sunt minim esse nisi pariatur. Anim sunt tempor id voluptate Lorem dolor. Duis id irure magna fugiat elit velit pariatur laboris excepteur Lorem sunt. Aliquip duis elit nulla culpa est quis exercitation ipsum. Ipsum ullamco do do nisi aute eu dolor.

Proident dolor magna deserunt eu commodo aute nostrud. Eu magna anim cillum officia est eu nulla. Et reprehenderit labore dolore ipsum est officia duis aliquip sit eu qui anim.

Exercitation aliqua adipisicing occaecat eiusmod laboris amet sint labore ea culpa deserunt et. Mollit exercitation nulla cillum ad velit dolore aliqua veniam. Elit ea nisi reprehenderit cupidatat velit magna est ea deserunt sint ea. Voluptate Lorem labore mollit eiusmod. Do dolor ex reprehenderit labore qui commodo. Laborum anim eu amet culpa Lorem do nisi sint tempor qui Lorem. Lorem enim ipsum anim ex dolore duis est sint aliqua ullamco deserunt ea labore officia.<br />
Ex reprehenderit proident in cupidatat non elit incididunt officia incididunt excepteur nostrud. Ea pariatur enim consectetur proident ex ex deserunt laborum dolore exercitation adipisicing sunt. Anim id minim pariatur laboris aliqua cupidatat anim pariatur ut irure proident excepteur incididunt esse.

Ea enim cillum mollit elit ex. Sunt commodo officia est ea veniam sunt ipsum mollit reprehenderit. Exercitation dolor ea nulla minim deserunt ex ad duis. Magna nulla duis occaecat tempor cillum esse commodo. Consectetur eu cupidatat ea aliquip nisi proident. In incididunt aliqua sunt occaecat magna nisi officia.

Mollit magna ipsum aliqua esse dolor aute fugiat mollit ullamco amet enim. Sunt ullamco incididunt aliquip nisi aliquip exercitation consequat dolore culpa in ex deserunt. Consequat irure adipisicing excepteur elit sunt magna excepteur veniam irure dolor occaecat minim. Consequat nulla et et duis ullamco incididunt nostrud officia sunt cillum. Amet Lorem ea enim anim pariatur consequat ut ex.

Culpa aliquip aliquip consectetur ad consequat consectetur nostrud irure non minim nisi irure. Ad laborum aliqua nulla ipsum nostrud mollit aliquip magna aliquip in quis qui incididunt. Elit eiusmod consectetur velit ea pariatur. Sit id est aliqua commodo nisi dolore tempor adipisicing. Ea eiusmod est ad voluptate ipsum pariatur enim aliqua cupidatat nulla id. Esse in velit magna cillum in in fugiat ullamco. Consequat labore aliqua dolore commodo.

Eiusmod qui elit eiusmod nostrud consectetur commodo. Ipsum mollit labore occaecat aliquip ex sit ipsum quis culpa ut mollit esse. Eiusmod elit culpa amet ea adipisicing cupidatat incididunt est proident id. Deserunt ut et in do do laboris nisi velit id elit. Incididunt excepteur nulla tempor reprehenderit. Labore eiusmod aliqua amet reprehenderit nisi. Non mollit fugiat exercitation officia esse ad consectetur.

Irure dolore sunt occaecat velit excepteur et duis. Ad duis consectetur nisi irure sint mollit in enim aliquip. Laborum esse culpa sit tempor elit. Duis quis duis velit duis ullamco ea mollit esse amet dolor labore. Voluptate officia nisi culpa laboris culpa Lorem ad ea laboris sunt irure nostrud.

Irure enim reprehenderit aute mollit eu eu aute culpa. Cupidatat deserunt ipsum dolore deserunt. Non est aliqua adipisicing occaecat velit nulla amet. Commodo veniam adipisicing laboris pariatur. Lorem exercitation do ea cupidatat voluptate cupidatat aliquip excepteur aliqua tempor nulla proident labore. Duis amet elit deserunt proident laboris deserunt pariatur nulla pariatur. Et aute irure ullamco mollit eu.

Velit labore sit consectetur sunt dolore eu in commodo laboris. Nostrud consectetur adipisicing sint amet excepteur elit magna voluptate ullamco enim proident elit. Quis duis occaecat ipsum nisi reprehenderit amet officia dolore sunt et ea veniam ex laboris.

Aute enim Lorem ut ipsum commodo ex do velit deserunt non Lorem ipsum adipisicing nisi. Anim cillum pariatur sunt aute excepteur ut adipisicing ea eu sit dolor. Mollit deserunt laboris Lorem incididunt aute minim minim fugiat magna nisi ullamco. Enim velit excepteur ipsum consequat. Exercitation ex aute ut dolore do ad enim. Ad dolor sit ut aute fugiat laborum esse commodo. Enim cupidatat quis pariatur pariatur eu ea.

Occaecat consectetur ad proident laborum ut irure non. Minim proident exercitation veniam irure est aute officia nulla incididunt culpa cupidatat. Adipisicing reprehenderit ut laborum tempor nisi mollit ullamco consectetur ea incididunt cillum. Dolore minim qui excepteur anim aliquip.
      </p>
    </div>
    </div>
  );
}

export default App;
