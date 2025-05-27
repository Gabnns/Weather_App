import { Link } from 'react-router-dom'


const header = () => {
  return (
    <header className='sticky top-0 z-50 w-full bg-foreground/95 py-2'>
      <div className=''>
        <Link to={"/"}>
          <img src="/logo.png" alt="Logo Klimate" className='h-14' />
        </Link>

        <div>
          {/* Search */}
          
        </div>
      </div>
    </header>
  )
}

export default header