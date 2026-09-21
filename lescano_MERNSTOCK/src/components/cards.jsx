

function Cards({ studentsInfo }) {
    
    return (
        <div>
            <div>
                {studentsInfo.name.charAt(0)}
            </div>

            <div>
                <h3>
                    {studentsInfo.name}
                </h3>

                <p>
                    <span>
                        Student Number:
                    </span>
                    {studentsInfo.studentNumber}
                </p>

                <p>
                    <span>
                        Gender:
                    </span>
                    {studentsInfo.gender}
                </p>
                </div>
        </div>
    )
}

export default Cards;