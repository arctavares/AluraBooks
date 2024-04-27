export default function Contact() {
    return (
        <>
            <div className="contactContainer">
                <div className="contactTextContainer">
                    <h1>Fique por dentro das novidades!</h1>
                    <p>Atualizações de e-books, novos livros, promoções e outros.</p>
                </div>
                <div className="inputContainer">
                    <img src="src/images/Email.svg" alt="Email" />
                    <input type="email" placeholder="Cadastre seu e-mail" />
                </div>
            </div>
        </>
    )
}