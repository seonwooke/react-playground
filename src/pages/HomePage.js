import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>React Playground</h1>
      <Link to="/users">👉 사용자 목록 보러가기</Link>
    </div>
  );
}