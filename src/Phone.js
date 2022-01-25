import './Phone.css';

//Api Contact
const Phone = ({ number, type }) => (
    <div className="phoneNumber">
        <p>{type}: {number}</p>
    </div>
);

export default Phone;