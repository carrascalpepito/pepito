function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function sendMessage() {
    const input = document.getElementById("chatInput");
    if (input.value.trim() === "") return;

    const box = document.getElementById("chatBox");

    let wrapper = document.createElement("div");
    wrapper.classList.add("message-wrapper");

    let avatar = document.createElement("div");
    avatar.classList.add("avatar");
    avatar.textContent = "T";

    let msg = document.createElement("div");
    msg.classList.add("bubble", "mine");
    msg.textContent = input.value;

    wrapper.appendChild(avatar);
    wrapper.appendChild(msg);
    box.appendChild(wrapper);

    box.scrollTop = box.scrollHeight;

    // WhatsApp
    let mensaje = encodeURIComponent(input.value);
    let numero = "16124601102";
    window.open(`https://wa.me/${numero}?text=${mensaje}`, "_blank");

    input.value = "";
}
