import './Tours.css'
import Card from './Card';

function Tours(props) {
    return (
        <div>
            <div>
                <h2>Plan With Love</h2>
            </div>
            <div>
                {
                    props.tours.map((tour) => {
                        return (
                            <Card></Card>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Tours;