
const postServise = () => {

    const getResourse = async (url: string) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    const getAllPosts = () => {
        return getResourse('https://jsonplaceholder.typicode.com/posts');
    }
    console.log(getAllPosts);
}

console.log(postServise);

export default postServise;