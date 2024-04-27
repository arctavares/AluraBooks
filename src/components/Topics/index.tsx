export function Topics() {

    const topicsSubjects = [
        'Android',
        'Marketing Digital',
        'Agile',
        'Startups',
        'HTML e CSS',
        'Python',
        'Orientação a Objeto',
        'Java'
    ]

    function renderTopics() {
        return topicsSubjects.map((topicSubject) => {
            return  <li className="topicsItem">
                        <a href="#" className="topicsLink">{topicSubject}</a>
                    </li>
        })
    }

    return (
        <div className="topicsContainer">
            <div className="topicsTitle">
                <h1>TÓPICOS VISITADOS RECENTEMENTE</h1>
            </div>
            <div className="topicsListContainer">
                <ul className="topicsList">
                    {renderTopics()}
                </ul>
            </div>
        </div>
    )
}