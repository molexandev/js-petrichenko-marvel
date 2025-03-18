import ErrorMessage from '../errorMessage/ErrorMessage';
import { Link } from 'react-router-dom';

const Page404 = () => {
   return (
      <div>
         <div
            style={{
               color: '#9F0013',
               fontSize: '76px',
               margin: '0 auto',
               textAlign: 'center',
               padding: '10px 10px',
            }}
         >
            404
         </div>
         <ErrorMessage />
         <p
            style={{
               textAlign: 'center',
               fontWeight: 'bold',
               fontSize: '24px',
            }}
         >
            Page doesn't exist
         </p>
         <Link
            style={{
               display: 'block',
               textAlign: 'center',
               fontWeight: 'bold',
               fontSize: '24px',
               marginTop: '30px',
            }}
            to="/"
         >
            Back to main page
         </Link>
      </div>
   );
};

export default Page404;
