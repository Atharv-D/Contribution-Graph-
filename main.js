document.addEventListener("DOMContentLoaded", function () {
 
    const githubUsername = 'Atharv-D';

  
    const accessToken = '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';

    const apiUrl = `https://api.github.com/users/${githubUsername}/contributions?access_token=${accessToken}`;

    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
           
            const graphImageUrl = data[0].url;

            
            const graphImage = document.createElement('img');
            graphImage.src = graphImageUrl;

            
            const contributionGraphDiv = document.getElementById('contribution-graph');
            contributionGraphDiv.appendChild(graphImage);
        })
        .catch(error => console.error('Error fetching data:', error));
});
