import React from 'react'


function Man() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Companies />
            <Residencies />
            <Values />
            <Contact />
            <GetStarted />
            <Footer />
        </div>
    );
}




const App = () => {
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Man />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/residencies" element={<Residencies />} />
                    <Route path="/values" element={<Values />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/getStarted" element={<GetStarted />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
        </Router>
    )
}

export default App;