import { useEffect, useState } from 'react';
import { fetchUsers } from '../api/userApi';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/UserCard';

export default function UsersPage() {
  /**
   * useState : Bloc의 state 변수
   * setUsers : Bloc의 emit 함수
   * useEffect(() => ..., []) : Bloc에서 Event 발생 시 Bloc 내부 로직 처리
   *                          + initState (Why? [] 의존성 배열 덕분)
   * [] : "이 컴포넌트가 처음 마운트될 때만 실행해라"
   */
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>👥 사용자 목록</h2>
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onClick={() => navigate(`/users/${user.id}`)}
        />
      ))}
    </div>
  );
}