class Comments {
    constructor(comments, htmlListElement) {
        this.comments = comments;
        this.element = htmlListElement;
    }

    renderList() {
        //let html = "";

        for (let comment of this.comments) {
            this.element.innerHTML += renderComment(comment);
        }


    }

    renderComment( { name, body }) {
        return `<li>${name}<span>${body}</span></li>`;
    }
}