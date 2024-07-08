import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>Halaman About</h1>
        <ul>
        <Link to='Team'>Team</Link>
        </ul>
        <Outlet />
    </div>
  )
}

export default About;