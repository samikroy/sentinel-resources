function callSentinelFoldersInDepth() {
fetch('https://api.github.com/repos/Azure/Azure-Sentinel/git/trees/master?recursive=true', {
  headers: new Headers({
    'User-agent': 'Mozilla/4.0 Custom User Agent'
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
   let output = '';
  data.tree.forEach( folder => {
  console.log(folder.path); 
     output += `
        <a class="navbar-brand" href="#">
          ${folder.path}
        </a>
      `;
  });
   document.getElementById('output').innerHTML = output;
  })
.catch(error => console.error(error))
  };

function callSentinelFolders() {
fetch('https://api.github.com/repos/Azure/Azure-Sentinel/git/trees/master', {
  headers: new Headers({
    'User-agent': 'Mozilla/4.0 Custom User Agent'
  })
})
.then(response => response.json())
.then(data => {
  console.log(data);
   let output = '';
  data.tree.forEach( folder => {
  console.log(folder.path); 
     output += `
        <a class="navbar-brand" href="#">${folder.path}</a>
      `;
  });
   document.getElementById('output').innerHTML = output;
  })
.catch(error => console.error(error))
  };

callSentinelFolders() 
