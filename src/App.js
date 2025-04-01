import './App.css'
import About from './components/about'
import Shoes from './components/shoes'

function App() {
  return (
    <>
      <header>
        <table>
          <tbody>

        
          <tr>
            <th>c4</th>
            <th  className='azal1'>
              c5   <div className="ellipse-outline">אזל!</div>
            </th>
            <th className='azal1'>c6 <div className="ellipse-outline">אזל!</div></th>
            <th className='azal1'>c7 <div className="ellipse-outline">אזל!</div></th>
            <th>c8</th>
            <th>c9</th>
            <th>c10</th>
            <th>c11</th>
            <th>c12</th>
            <th>c13</th>
            <th>j1</th>
            <th className="wide-column">
              <b>מידת floafers</b>
            </th>
          </tr>
          <tr>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>25</td>
            <td>27</td>
            <td>28.5</td>
            <td>30</td>
            <td>31.5</td>
            <td>32.5</td>
            <td className="wide-column">
              <b>מידת נעל בישראל</b>
            </td>
          </tr>
          </tbody>
        </table>

        <div className="ellipse">
          <p className="h5"> כל המידות </p>
          <p className="h4"> 100 ש"ח בלבד</p>
        </div>
      </header>

      <About />
      <Shoes></Shoes>
    </>
  )
}

export default App
