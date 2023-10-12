import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Actions
import { getUserDetails } from '../../../actions/userActions';

// Components Bootstrap
import Container from 'react-bootstrap/Container';

const ProfileSCreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Local variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  // Global state => userLogin
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Global state => userDetails
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (!userInfo) {
      navigate('/login');
    } else {
      if (!user.name || user._id !== userInfo._id) {
        dispatch(getUserDetails('profile'));
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [navigate, userInfo, user, dispatch]);

  return (
    <section className="user-profile admin-section">
      <Container fluid>
        <div>
          <p>Nombre</p>
          <span>{name}</span>
          <p>email</p>
          <span>{email}</span>
          <p>Administrador</p>
          <span>{isAdmin ? 'Sí' : 'No'}</span>
        </div>
      </Container>
    </section>
  );
};

export default ProfileSCreen;
