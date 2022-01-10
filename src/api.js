import axios from "axios"

export async function getData() {
    const { data } = await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
    return data
}