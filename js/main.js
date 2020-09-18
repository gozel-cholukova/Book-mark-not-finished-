//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);

function saveBookmark(e){
  //get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  // console.log(siteName);
  // console.log(siteUrl);

  var bookmark = {
    name: siteName,
    url: siteUrl
  }
  // console.log(bookMark);


/*
  //local storage test
  localStorage.setItem('test', 'Hello World');
  console.log(localStorage.getItem('test'));

  localStorage.removeItem('test'); 
  console.log(localStorage.getItem('test'));
*/
  

//test if bookmarks is null
if(localStorage.getItem('bookmarks') === null){
  //init array
  var bookmarks = [];

  //add to array
  bookmarks.push(bookmark);

  //set to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
} else {
  //get bookmarks from localstorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //add bookmark to array
  bookmarks.push(bookmark);

  //re-set back to Localstorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
 

 // console.log('It Works');
  //prevent form from submitting
  e.preventDefault();
}

// //delete bookmark
// function deleteBookmark(url){
//   // Get bookmarks from localStorage
//   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
//   // Loop through the bookmarks
//   for(var i =0;i < bookmarks.length;i++){
//     if(bookmarks[i].url == url){
//       // Remove from array
//       bookmarks.splice(i, 1);
//     }
//   }

//fetch bookmarks
function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // console.log(bookmarks);

  //get output id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">t'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+addhttp(url)+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}