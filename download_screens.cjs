const fs = require('fs');

async function run() {
  const files = {
  'console_mobile.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzc2YjA4OTUwYzg1MjRjZjZhNDQ1NTk4NThjYTk4MTM2EgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
  'store_mobile.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzlhYmZiYmNhMTgyMjRlNzE5OTE2ZWVkOTQ0ZDc2NjdiEgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
  'prize_inquiry_mobile.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzVmZjhlNjcwZWYwMzQ5NWZhYjRmMmY3YzU4MGRjZmMzEgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
  'user_settings_mobile.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2Q0YmI5YWNkZjBhZTRkNzk5YWZiMmE3YjRkN2MxNzdiEgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
  
  'console_desktop.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzUzZWUwYmYyODcwNTQ0NmZhZWM5ZjMwN2QxMTkzZjQ3EgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
  'store_desktop.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2IyYzc0N2RhOWE4MjQzYWZhMjRiMGIyMjNjNjQ4YzEyEgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
  'prize_inquiry_desktop.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2I5MzM5NDRlYWY2MDQ1MmZiNGE2YTcyMWFmZmY3NmE1EgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086',
  'user_settings_desktop.html': 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzU3ZmMyOTNiNGRiNTRlMTk4ZmMyOWVjOGZkNjM1YmFlEgsSBxCatbX7_gYYAZIBIwoKcHJvamVjdF9pZBIVQhMzMzI5Mzk5NTQ1MjA2OTAxMDAw&filename=&opi=89354086'
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
