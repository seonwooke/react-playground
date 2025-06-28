import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchUserById, toggleUserLike } from '../api/userApi';

export default function UserDetailPage() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  /**
   * [id] : "id가 바뀔 때마다 유저 정보를 다시 불러와라"
   */
  useEffect(() => {
    fetchUserById(id).then(setUser);
  }, [id]);

  const handleToggleLike = async () => {
    const updated = await toggleUserLike(id);
    setUser(updated);
  };

  /**
   * !user : user가 null, undefined, false, 0일 때만 실행해라
   */
  if (!user) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>{user.name}님의 프로필</h2>
      <p>이메일 : {user.email}</p>
      <button onClick={handleToggleLike}>
        {user.liked ? '❤️ 좋아요 취소' : '🤍 좋아요'}
      </button>
    </div>
  );
}