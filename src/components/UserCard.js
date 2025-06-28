export default function UserCard({ user, onClick }) {
  return (
    <div onClick={onClick} style={{
      border: '1px solid gray',
      borderRadius: 8,
      padding: 12,
      marginBottom: 8,
      cursor: 'pointer'
    }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>{user.liked ? '❤️' : '🤍'} 좋아요</p>
    </div>
  );
}