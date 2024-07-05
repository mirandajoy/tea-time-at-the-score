import './PageLayout.scss'

function PageLayout({children}) {
  return (
    <main className="pg-layout">
        {children}
    </main>
  )
}

export default PageLayout