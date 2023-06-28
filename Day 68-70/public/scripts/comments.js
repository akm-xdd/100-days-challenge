const loadCommentsBtnElement = document.getElementById("load-comments-btn");
const commentsSectionElement = document.getElementById("comments");
const commentsFormElement = document.querySelector("#comments-form form");
const commentTitleElement = document.getElementById("title");
const commentTextElement = document.getElementById("text");

function createCommentsList(comments) {
  const commentListElement = document.createElement("ol");

  for (const comment of comments) {
    const commentElement = document.createElement("li");
    commentElement.innerHTML = `
    <article class="comment-item">
        <h2>${comment.title}</h2>
        <p>${comment.text}</p>
    </article>`;
    commentListElement.appendChild(commentElement);
  }
  return commentListElement;
}

async function fetchCommentsForPost(event) {
  const postId = loadCommentsBtnElement.dataset.postid;
  try {
    const response = await fetch(`/posts/${postId}/comments`);

    if (!response.ok) {
      alert("Could not fetch comments. Please try again later.");
      return;
    }
    const responseData = await response.json();

    if (responseData && responseData.length > 0) {
      const commentsListElement = createCommentsList(responseData);
      commentsSectionElement.innerHTML = "";
      commentsSectionElement.appendChild(commentsListElement);
    } else {
      commentsSectionElement.firstElementChild.textContent =
        "No comments yet. Be the first to comment!";
    }
  } catch (error) {
    alert("Could not load comments. Please try again later.");
  }
}

loadCommentsBtnElement.addEventListener("click", fetchCommentsForPost);

async function saveComment(event) {
  event.preventDefault();
  const postId = commentsFormElement.dataset.postid;
  const enteredTitle = commentTitleElement.value;
  const enteredText = commentTextElement.value;

  const comment = { title: enteredTitle, text: enteredText };

  try {
    const response = await fetch(`/posts/${postId}/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      alert("Could not save comment. Please try again later.");
    } else {
      fetchCommentsForPost();
    }
  } catch (error) {
    alert("Something went wrong. Please try again later.");
  }
}

commentsFormElement.addEventListener("submit", saveComment);
