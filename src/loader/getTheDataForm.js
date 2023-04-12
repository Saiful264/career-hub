export const fetchTheData = async() =>{
    const res = await fetch('FeaturedJobs.json');
    const data = await res.json();
    // console.log(data);
    return data;
}
