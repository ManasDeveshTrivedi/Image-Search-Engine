const accessKey="HL0Hhz9ucoty-V4JQ32jB6RlCFL4vaQ3T-W8W7X3Imc";

const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const searchMoreBtn=document.getElementById("show-more-btn");


let keyword="";
let page=1;

async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    
}