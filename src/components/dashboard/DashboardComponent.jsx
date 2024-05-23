
import AllTicket from '../shared/AllTickets';
import DashboardLayout from '../shared/DashboardLayout'
const DashboardComponent = () => {


  return (
    <>
      <DashboardLayout>
        <div className='grid px-6 gap-5'>
          <div className='grid grid-cols-4 gap-2 justify-between text-base-100 dark:text-white'>
            <div className='flex flex-col h-32 justify-center items-center bg-white dark:bg-base-200 gap-2 p-5 rounded-lg border-2 border-slate-500 hover:text-blue-500 hover:border-blue-500'>
              <p className='text-2xl font-semibold'>Unresolved</p>
              <p className='font-bold text-4xl'>60</p>
            </div>
          </div>
          <AllTicket />
        </div>
      </DashboardLayout>
    </>
  )
}

export default DashboardComponent
