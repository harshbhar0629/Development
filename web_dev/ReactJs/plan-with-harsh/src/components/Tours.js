import Card from './Card';

function Tours(props) {
    return (
        <div className='container'>
            <div>
                <h2 className='heading'>Plan With Harsh!</h2>
            </div>
            <div className='cards'>
                {/* tours.map it go every tour and return card for it this is just like for each loop we don't have to create again and again card */}
                {
                    props.tours.map((tour) => {
                        {/* {...tour} means it creates copy of every tour and passed as arguement */}
                        return (
                            <Card {...tour} removeTour={props.removeTour}></Card>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Tours;