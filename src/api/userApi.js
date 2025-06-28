const users = [
  { id: 1, name: "John Doe", email: "john@example.com", liked: false },
  { id: 2, name: "Jane Smith", email: "jane@example.com", liked: false },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", liked: false },
];

/**
 * Promise : 비동기 작업의 결과를 나타내는 객체
 * resolve : 비동기 작업이 성공적으로 완료되었을 때 호출되는 콜백 함수
 * reject : 비동기 작업이 실패했을 때 호출되는 콜백 함수
 * 
 * [Flutter]
 * 
  Future<List<User>> fetchUsers() async {
      return Future.delayed(
        Duration(milliseconds: 500),
        () => [...users], // users 복사본 리턴
      );
    }
 */
export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...users]), 500);
  });
}

export function fetchUserById(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users.find((u) => u.id === parseInt(id))), 500);
  });
}

export function toggleUserLike(id) {
  const user = users.find((u) => u.id === parseInt(id));
  
  if (user) user.liked = !user.liked;
  return new Promise((resolve) => {
    setTimeout(() => resolve({...user}), 200);
  });
}