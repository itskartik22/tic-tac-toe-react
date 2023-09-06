export default function Square(props) {
    return (
        <div onClick={props.onClick} className="board-box flex justify-center items-center m-2 mb-4 p-3 text-6xl w-20 h-20 border-zinc-800 border-2">
            <h5>{props.state}</h5>
        </div>
    );
}