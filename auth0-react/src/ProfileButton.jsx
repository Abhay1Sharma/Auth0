import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return
        <div>
            <video width="320" height="240" controls>
                <source src="https://cdn.pixabay.com/video/2022/02/07/107089-674703781_large.mp4" type="video/mp4"></source>
            </video>

        </div>
    }



    return (
        isAuthenticated && user ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <img
                    src={user.picture || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`}
                    alt={user.name || 'User'}
                    className="profile-picture"
                    style={{
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '3px solid #63b3ed'
                    }}
                    onError={(e) => {
                        const target = e.target;
                        if (target instanceof HTMLImageElement) {
                            target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='110' height='110' viewBox='0 0 110 110'%3E%3Ccircle cx='55' cy='55' r='55' fill='%2363b3ed'/%3E%3Cpath d='M55 50c8.28 0 15-6.72 15-15s-6.72-15-15-15-15 6.72-15 15 6.72 15 15 15zm0 7.5c-10 0-30 5.02-30 15v3.75c0 2.07 1.68 3.75 3.75 3.75h52.5c2.07 0 3.75-1.68 3.75-3.75V72.5c0-9.98-20-15-30-15z' fill='%23fff'/%3E%3C/svg%3E`;
                        }
                    }}
                />
                <div style={{ textAlign: 'center' }}>
                    <div className="profile-name" style={{ fontSize: '2rem', fontWeight: '600', color: '#f7fafc', marginBottom: '0.5rem' }}>
                        {console.log(user)}
                        {user.name}
                    </div>
                    <div className="profile-email" style={{ fontSize: '1.15rem', color: '#a0aec0' }}>
                        {user.email}
                    </div>
                </div>
            </div>
        ) : null
    );
};

export default Profile;