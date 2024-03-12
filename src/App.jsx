import Footer from "./components/Footer";
import Header from "./components/Header";
import BasicTable from "./components/Table";
import users from "./assets/data.json";
import comments from './assets/comments.json';


const userCols = [
	{ key: 1, label: "ID" },
	{ key: 2, label: "Name" },
	{ key: 3, label: "Username" },
	{ key: 4, label: "Email" },
	{ key: 5, label: "Phone" },
	{ key: 6, label: "Website" },
	{ key: 7, label: "Company" },
];

const userRows = users.map(user => {
	return {
		id: user.id,
		name: user.name,
		username: user.username,
		email: user.email,
		phone: user.phone,
		website: user.website,
		company: user.company.name,
	};
});

const postCols = [
	{ key: 1, label: "PostId" },
	{ key: 2, label: "Id" },
	{ key: 3, label: "Name" },
	{ key: 4, label: "Email" },
	{ key: 6, label: "Body" },
];

const postrows = comments.map(user => {
	return {
		postId: user.postId,
		id: user.id,
		name: user.name,
		email: user.email,
		body: user.body,
	};
});

function App() {
	return (
		<div className='w-full flex flex-col min-h-screen'>
			<Header />

			<main className='flex-1 flex flex-col gap-[2rem] bg-slate-100 px-[3rem] py-[1rem]'>
				<h1 className='text-3xl'>Users List</h1>
				<BasicTable cols={userCols} rows={userRows} />

				<h1 className='text-3xl mt-4 mb-2'>Comments List</h1>
				<BasicTable cols={postCols} rows={postrows} />
			</main>

			<Footer />
		</div>
	);
}

export default App;

const albRows = album.map(user => {
	return {
        userId:user.userId,
		id:user.id,
		title:user.title,
	}
})
