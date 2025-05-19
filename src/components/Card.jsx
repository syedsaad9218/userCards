const Card = (props) => {
  return (
    <div className="bg-white text-black inline-block p-6 text-center rounded-lg shadow-lg m-4">
      <h2 className="text-lg text-black font-bold">{props.user}</h2>
      <p className="text-gray-600">{props.email}</p>
      <p className="text-gray-600">{props.phone}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Add User</button>
    </div>
  );
}

export default Card;


