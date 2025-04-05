export default function Comment({ email, date, comment }) {
  return (
    <div>
      <h4>{email}</h4>
      <p>Em {date}</p>
      <p>{comment}</p>
    </div>
  );
}
