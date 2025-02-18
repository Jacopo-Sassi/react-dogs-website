function Header () {
    return(
        <div className="header">
            <div className="left">
                <img className="logo" src="./public/paw-logo.png" alt="paw-logo"/>
                <h1 className="testo-header white-space pawsome">Pawsome Dogs</h1>
            </div>
            <div className="right">
                <p className="testo-header">Home</p>
                <p className="testo-header">About</p>
                <p className="testo-header">Contatti</p>
            </div>
        </div>
    )
}
export default Header;