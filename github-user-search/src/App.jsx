import SearchComponent from './components/Search'

function App() {
  return (
    <div className='container mx-auto mt-6  bg-darkBlue font-roboto p-4'>
      <h1 className='text-3xl text-center font-bold text-darkBlue mt-12'>GitHub User Search</h1>
      <SearchComponent />
    </div>
  )
}

export default App;