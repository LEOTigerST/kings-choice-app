const fs = require('fs');

async function run() {
  const files = {
    'play_mobile.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ZkMzRhMWZhNmJmNTQ5MjZhYzE0OWU3MjA0ZDBjYjgwEgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
    'play_desktop.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzQwZmNmZjRiNWExNzQ3YTY5MDBmZThlMGI5NjkzMTQyEgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086'
  };

  for(const [name, url] of Object.entries(files)){
    try {
      const r = await fetch(url);
      const text = await r.text();
      fs.writeFileSync('html_assets/' + name, text);
      console.log('Downloaded ' + name);
    } catch (e) {
      console.error('Failed to download ' + name, e.message);
    }
  }
}
run();
