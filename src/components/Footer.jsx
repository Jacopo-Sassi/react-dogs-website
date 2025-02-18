function Footer () {
    return(
        <div className="footer">
            <div className="contenitore-sezioni">
                <div className="left-footer">
                    <h5 className="testo-footer">Contattaci</h5>
                    <p className="testo-footer">+39 555 123 4567</p>
                    <p className="testo-footer">info@pawsomedogs.com</p>
                    <p className="testo-footer">Via dei cani, 43</p>
                </div>
                <div className="central-footer">
                    <h5 className="testo-footer">Link Rapidi</h5>
                        <p className="testo-footer">About</p>
                        <p className="testo-footer">Servizi</p>
                        <p className="testo-footer">Tips su dog care </p>
                    </div>
                <div className="right-footer">
                    <h5 className="testo-footer">Newsletter</h5>
                        <p className="testo-footer">Iscriviti alla newsletter per tips and tricks e aggiornamenti</p>
                        <form action="#" method="post">
                            <input type="text" id="inputText" name="inputText" placeholder="Inserisci la tua email" required></input>
                            <button type="submit">Iscriviti</button>
                        </form>
                </div>
            </div>
            <p className="testo-footer copyright">Made with love for dog lovers ©2024</p>
        </div>
    )
}
export default Footer;