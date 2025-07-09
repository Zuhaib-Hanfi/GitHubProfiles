import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/body";
import Body2 from "./components/body2";
import Footer from "./components/footer";

function App() {

    return (
        <>
            {/* Header */}
            <Header />
            {/* Body */}
            <Body />
            {/* Footer */}
            <Footer/>
        </>
    )


}

const reactRoot = ReactDOM.createRoot(document.getElementById('root'));
reactRoot.render(<App />);