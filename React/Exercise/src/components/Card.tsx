
export interface User  {
    first_name: string;
    last_name: string;
    employment: {
        title: string;
        key_skill: string;
    },
    email: string;
    phone_number: string;
    password: string;
    id: number;
    username: string;
    address: {
        city: string;
        street_name: string;
        coordinates: {lat: number, lng: number};
        country: string;
        state: string;
        street_address: string;
        zip_code: string;

    };
    avatar: string;
    credit_card: {cc_number: string};
    data_of_birth: string;
    social_insurance_number: string;
    subscription: {plan: string; status: string, payment_method: string,term:string};
    uid: string;
}

const Card = (props: User) => {
    const {first_name, last_name, avatar, employment
    } = props;
  return (
    <li className='border rounded-lg p-2'>
        <div className='card'>
            <div className='card-body'>
                <img src={avatar} alt="" />
                <h5 className='card-title text-xl font-semibold'>{`${first_name} ${last_name}`}</h5>
                <p className='card-text'>{`${employment
.title}`}</p>
            </div>
        </div>
    </li>
  )
}

export default Card