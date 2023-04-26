$(document).ready(function() {
fetch('https://api.github.com/repos/Azure/Azure-Sentinel/git/trees/master?recursive=true', {
  headers: new Headers({
    'User-agent': 'Mozilla/4.0 Custom User Agent'
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
   let output = '<h2 class="mb-4">Folders</h2>';
  data.tree.forEach( folder => {
  console.log(folder.path); 
     output += `
        <ul class="list-group mb-3">
          <li class="list-group-item">Name: ${folder.path}</li>
        </ul>
      `;
  });
   document.getElementById('output').innerHTML = output;
  })
.catch(error => console.error(error))
  });
