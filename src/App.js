import {Routes, Route} from 'react-router-dom'
import Layout from './component/Layout';
import Public from './component/Public';
import Login from './feature/auth/Login';
import DashLayout from './component/DashLayout'
import Welcome from './feature/auth/Welcome';
import NoteList from './feature/notes/NotesList';
import UserList from './feature/users/UserList';
import EditUser from './feature/users/EditUser';
import NewUserForm from './feature/users/NewUserForm';
import EditNote from './feature/notes/EditNote';
import NewNote from './feature/notes/NewNote';
import Prefetch from './feature/auth/prefetch';
import PersistLogin from './feature/auth/PersistLogin';
import RequireAuth from './feature/auth/RequireAuth';
import { ROLES } from './config/roles';



function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Layout />}>
            {/* public routes */}
              <Route index element={<Public />} />
              <Route path='login' element={<Login />} />

            {/* protected Route */}
              <Route element={<PersistLogin />}>
              <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
              <Route element={<Prefetch />}>
                <Route path='dash' element={<DashLayout />}>
                  <Route index element={<Welcome />} />
                  <Route path='notes'>
                    <Route index element={<NoteList />} />
                    <Route path=':id' element={<EditNote />} />
                    <Route path='new' element={<NewNote />} />
                  </Route>
                  <Route path='users'>
                    <Route index element={<UserList />} />
                    <Route path=':id' element={<EditUser />} />
                    <Route path='new' element={<NewUserForm />} />
                  </Route>
                </Route>  {/* End Dash */}

              </Route>
              </Route>
              </Route>
         
          </Route>
      </Routes>
    </div>
  );
}

export default App;
