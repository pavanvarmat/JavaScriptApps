//Api calling with async/await
const postsInfo = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await result.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
postsInfo();
