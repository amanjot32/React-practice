import Header from './Components/header'
import NewsTile from './Components/main/news_tile'

function App() {

  return (
    <>
      <Header />
      <NewsTile title={'Debby A Little Stronger; Flood Threat Continues - The Weather Channel'} desc={"The stock market continues to recover from Monday's brutal sell-off, yet third-quarter earnings outlooks are pressuring some companies.\nThe S&P 500 is up 1%, and the tech-heavy Nasdaq Composite added 1.1%. The Dow Jones Industrial Average gained 0.6%,"} imgUrl={''} authorName={'Amanjot'} date={'07/08/2024'} />
    </>
  )
}

export default App
