const posts = [
    {
        name: 'Vincent van Gogh',
        username: 'vincey1853',
        location: 'Zundert, Netherlands',
        avatar: 'images/avatar-vangogh.jpg',
        post: 'images/post-vangogh.jpg',
        comment: 'just took a few mushrooms lol',
        likes: 21,
        isLiked: false,
    },
    {
        name: 'Gustave Courbet',
        username: 'gus1819',
        location: 'Ornans, France',
        avatar: 'images/avatar-courbet.jpg',
        post: 'images/post-courbet.jpg',
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        isLiked: false,
    },
    {
        name: 'Joseph Ducreux',
        username: 'jd1735',
        location: 'Paris, France',
        avatar: 'images/avatar-ducreux.jpg',
        post: 'images/post-ducreux.jpg',
        comment:
            'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
        likes: 152,
        isLiked: false,
    },
];

const postsContainer = document.getElementById('post-container');

function renderPosts() {
    postsContainer.innerHTML = '';

    posts.forEach((post, index) => {
        const heartClass = post.isLiked ? 'fa-solid' : 'fa-regular';

        const postHTML = `
        <section class="post-container">
             <section class="padding post-author-info">
                <img src="${post.avatar}" alt="" class="avatar author-avatar">
                <ul class="post-author-details">
                    <li class="post-author">${post.name}</li>
                    <li class="post-location">${post.location}</li>
                </ul>
            </section>

            <img class="post-img" src="${post.post}" alt="">

            <section class="padding interaction-container">
                <section class="post-interaction-area">
                    <ul class="post-buttons">
                        <li class="btn like-btn" data-index="${index}">
                            <i class="${heartClass} fa-heart fa-xl like-icon"></i>
                        </li>
                        <li class="btn comment-btn"><img class="icon" src="./images/icon-comment.png" alt=""></li>
                        <li class="btn share-btn"><img class="icon" src="./images/icon-dm.png" alt=""></li>
                    </ul>
                    <p class="like-count"><span>${post.likes}</span> likes</p>
                </section>
    
                <section class="post-description">
                    <p class="caption">
                        <span class="post-author-username">
                            <a href="#" target="_blank" title="post-author-user">${post.username}</a>
                        </span>  
                        ${post.comment}
                    </p>
                </section>
            </section>
        </section>`;

        postsContainer.insertAdjacentHTML('beforeend', postHTML);
    });

    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach((button) => {
        button.addEventListener('click', handleLikeClick);
    });
}

function handleLikeClick() {
    const index = parseInt(this.dataset.index);
    const post = posts[index];
    const heartIcon = this.querySelector('.like-icon');
    const likeCountSpan = this.closest('.post-interaction-area').querySelector(
        '.like-count span'
    );

    post.isLiked = !post.isLiked;

    if (post.isLiked) {
        heartIcon.classList.replace('fa-regular', 'fa-solid');
        post.likes++;
    } else {
        heartIcon.classList.replace('fa-solid', 'fa-regular');
        post.likes--;
    }

    likeCountSpan.textContent = post.likes;
}

renderPosts();
