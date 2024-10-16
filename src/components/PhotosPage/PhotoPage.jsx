const PhotosPage = () => {
    return (
        <div class="columns">
            <div class="column">
                <div class="box-heading">
                    <div class="dropdown photos-dropdown is-spaced is-neutral dropdown-trigger">
                        <div>
                            <div class="button">
                                <span>All Pictures</span>
                                <i data-feather="chevron-down"></i>
                            </div>
                        </div>
                        <div class="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="#" class="dropdown-item">
                                    <div class="media">
                                        <i data-feather="tag"></i>
                                        <div class="media-content">
                                            <h3>Tagged Photos</h3>
                                            <small>Photos whith this user tagged.</small>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item">
                                    <div class="media">
                                        <i data-feather="clock"></i>
                                        <div class="media-content">
                                            <h3>Recent</h3>
                                            <small>View most recent photos.</small>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item">
                                    <div class="media">
                                        <i data-feather="heart"></i>
                                        <div class="media-content">
                                            <h3>Popular</h3>
                                            <small>View popular photos.</small>
                                        </div>
                                    </div>
                                </a>
                                <a class="dropdown-item">
                                    <div class="media">
                                        <i data-feather="book-open"></i>
                                        <div class="media-content">
                                            <h3>Albums</h3>
                                            <small>See all albums.</small>
                                        </div>
                                    </div>
                                </a>
                                <hr class="dropdown-divider" />
                                <a class="dropdown-item modal-trigger" data-modal="albums-modal">
                                    <div class="media">
                                        <i data-feather="plus"></i>
                                        <div class="media-content">
                                            <h3>Add Photos</h3>
                                            <small>Upload pictures.</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="button-wrap">
                        <button type="button" class="button is-active">Recent</button>
                        <button type="button" class="button">Albums</button>
                    </div>
                </div>

                <div class="image-grid-wrap">
                    <div class="image-grid">

                        <div class="image-row">

                            <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/3.jpg">
                                <div class="overlay"></div>
                                <div class="image-owner">
                                    <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                                    <div class="name">Jenna Davis</div>
                                </div>
                                <div class="photo-time">Aug 23, 2019</div>
                                <a class="photo-like">
                                    <div class="inner">
                                        <div class="like-overlay"></div>
                                        <i data-feather="heart"></i>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div class="load-more-wrap has-text-centered">
                        <a href="#" class="load-more-button">Load More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotosPage;