let url="http://universities.hipolabs.com/search?name=middle";

let country="nepal";

async function getcolleges() {
    try{
        let res=await axios.get(url+country);
        console.log(res)
    }
}