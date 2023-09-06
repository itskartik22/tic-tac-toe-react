import Board from './components/Board'



export default function App () {
    return (
        <div className="flex flex-col justify-center items-center bg-slate-900 w-screen h-screen">
            <h1 className='text-white text-4xl m-5'>TIC-TAC-TOE</h1>
            <Board />
        </div>
    );
}