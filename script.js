// script.js
function submitQuestion() {
    var question = document.getElementById('questionInput').value;
    var questionList = document.getElementById('questions');

    var li = document.createElement('li');
    li.textContent = question;

    var replyList = document.createElement('ul');
    replyList.classList.add('reply-list');

    var replyForm = document.createElement('form');
    replyForm.classList.add('reply-form');
    replyForm.innerHTML = `
        <textarea rows="3" cols="50" placeholder="Yorumunuzu buraya yazın..."></textarea><br>
        <button type="button" onclick="submitReply(this)">Yayınla</button>
        <ul class="reply-list"></ul>
    `;

    li.appendChild(replyForm);
    li.appendChild(replyList);
    questionList.appendChild(li);

    document.getElementById('questionInput').value = ''; // Formu temizle
}

function submitReply(btn) {
    var replyForm = btn.parentNode;
    var replyInput = replyForm.querySelector('textarea');
    var replyText = replyInput.value.trim(); // Trim ekledik, boşlukları temizler

    if (replyText !== '') {
        var replyItem = document.createElement('li');
        replyItem.textContent = replyText;
        replyItem.classList.add('reply-item');

        var replyList = btn.nextElementSibling;
        replyList.appendChild(replyItem);

        replyInput.value = ''; // Formu temizle
    }
}
