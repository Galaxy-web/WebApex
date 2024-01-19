var videoPaths = {
    horizon: {
        melhoresJogadas: "caminho/do/seu/video/horizon-melhores-jogadas.mp4",
        tutorial: "caminho/do/seu/video/horizon-tutorial.mp4",
        nenhum: null // Caminho nulo para nenhum vídeo
    },
    blaterroud: {
        melhoresJogadas: "caminho/do/seu/video/blaterroud-melhores-jogadas.mp4",
        tutorial: "caminho/do/seu/video/blaterroud-tutorial.mp4",
        nenhum: null // Caminho nulo para nenhum vídeo
    }
    // Adicione mais campeões conforme necessário
};

function changeVideo(champion) {
    var videoOption = document.getElementById(champion + "-video-option").value;
    var videoContainer = document.getElementById(champion + "-video-container");

    // Remova o vídeo atual (se houver)
    while (videoContainer.firstChild) {
        videoContainer.removeChild(videoContainer.firstChild);
    }

    // Adicione o novo vídeo com base na escolha do usuário
    if (videoOption !== "nenhum" && videoPaths[champion][videoOption]) {
        var newVideo = document.createElement("video");
        newVideo.src = videoPaths[champion][videoOption];
        newVideo.controls = true;

        videoContainer.appendChild(newVideo);
    } else {
        // Adiciona o aviso quando nenhum vídeo é encontrado
        var noVideoMessage = document.createElement("p");
        noVideoMessage.textContent = "Nenhum vídeo selecionado.";
        videoContainer.appendChild(noVideoMessage);
    }
}
