//Criar uma array

const playlist=[
"Pop", 
"Rock",
"Hip-Hop", 
"Sertanejo", 
"Funk",
"Samba", 
"Jazz", 
"Rap"
];

//Titulo da lista
console.log("---Playlist Personalizada---");

//loop para mostrar a playlist
for (let i=0; i < playlist.length; i++) {
     let posicao = i + 1;
     console.log("${posicao}º estilo: ${playlist[i]}");
}

console.log("\n---Destaques---");
console.log("Primeiro estilo da playlist:"+playlist[0]);
console.log("Ultimo estilo da playlist:"+playlist[playlist.length - 1]);
