import TailwindAdvancedEditor from "./components/editor/advanced-editor";

const App = () => {
	return (
		<div className='flex items-center justify-center flex-col'>
			<h1 className='font-bold text-5xl py-5 text-center'>Novel Editor</h1>
			<div className='container max-h-screen'>
			<TailwindAdvancedEditor />

			</div>
		</div>
	);
};

export default App;
