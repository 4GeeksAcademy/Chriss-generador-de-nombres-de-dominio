let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let extensions = ['.com', '.net', '.us', '.io']

for (let index = 0; index < pronoun.length; index++) {
    for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
        for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
            for (let extensionsIndex = 0; extensionsIndex < extensions.length; extensionsIndex++) {
                console.log(pronoun[index]+adj[adjIndex]+noun[nounIndex]+extensions[extensionsIndex]);
                
            }

        }
    }
}
