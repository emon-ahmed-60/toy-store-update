import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const {user,updateUserProfile, setLoading} = use(AuthContext)

    const updateProfile = (e) => {
        e.preventDefault();
        const displayName = e.target.name.value;
        const photoURL = e.target.photo.value;

        user.displayName = displayName;
        user.photoURL = photoURL;

      updateUserProfile(displayName,photoURL).then(()=>{
        user.displayName = displayName;
        user.photoURL = photoURL;
        setLoading(false);
        toast.success("profile updated")
      }).catch(err => {
        toast.error(err.code)
      })
    
    }

    return (
        <>
        <title>Toy Store - Profile</title>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-8">
              <div className='flex items-center gap-5 flex-col my-8'>
                <img src={user?.photoURL} alt="profile photo" className='w-24 rounded-full' />
                <div>
                  <h2>Name : {user?.displayName}</h2>
                <h2>Email : {user?.email}</h2>
                </div>
            </div>
        <div className="card-body">
          <form onSubmit={updateProfile}>
            
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                placeholder="Your Name"
                name="name"
              />
              <label className="label">Photo URL</label>
              <input
                type="text"
                className="input"
                placeholder="Photo URL"
                name="photo"
              />
             
             
              <button className="btn btn-neutral mt-4">Save Changes</button>
              </fieldset>
               
          </form>
        </div>
      </div>
        </>
    );
};

export default MyProfile;