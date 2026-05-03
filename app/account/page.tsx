import Dashboard from './dashboard'
import Header from '@/components/header'



function Page() {
  return (
    <div>
      <Header/>
      <div className='mx-auto max-w-1/2 py-12'>
      <Dashboard/>
      </div>
    </div>
  )
}

export default Page