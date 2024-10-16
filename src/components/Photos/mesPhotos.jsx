const mesPhotos = () => {
    return (
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

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/4.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                            <div class="name">Dan Walker</div>
                        </div>
                        <div class="photo-time">Aug 17, 2019</div>
                        <a class="photo-like is-liked">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                </div>


                <div class="image-row">

                    <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/17.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Aug 15, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/14.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Aug 12, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                </div>


                <div class="image-row">

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/24.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Aug 12, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-3 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/20.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Aug 11, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/23.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Aug 09, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                </div>


                <div class="image-row">
                    <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/21.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/milly.jpg" alt="" />
                            <div class="name">Milly Augustine</div>
                        </div>
                        <div class="photo-time">Aug 06, 2019</div>
                        <a class="photo-like is-liked">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                    <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/28.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                            <div class="name">Stella Bergmann</div>
                        </div>
                        <div class="photo-time">Aug 04, 2019</div>
                        <a class="photo-like is-liked">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                    <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/35.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/elise.jpg" alt="" />
                            <div class="name">Elise Walker</div>
                        </div>
                        <div class="photo-time">Aug 02, 2019</div>
                        <a class="photo-like is-liked">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                </div>


                <div class="image-row">

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/37.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Jul 29, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/32.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Jul 26, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                </div>


                <div class="image-row">

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/18.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Jul 24, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-3 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/19.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Jul 23, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/38.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Jul 21, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="image-row">

                    <div class="flex-2 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/22.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/dan.jpg" alt="" />
                            <div class="name">Dan Walker</div>
                        </div>
                        <div class="photo-time">Jul 19, 2019</div>
                        <a class="photo-like is-liked">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/27.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/jenna.png" alt="" />
                            <div class="name">Jenna Davis</div>
                        </div>
                        <div class="photo-time">Jul 19, 2019</div>
                        <a class="photo-like">
                            <div class="inner">
                                <div class="like-overlay"></div>
                                <i data-feather="heart"></i>
                            </div>
                        </a>
                    </div>

                    <div class="flex-1 has-background-image" data-background="https://via.placeholder.com/1600x900" data-demo-background="assets/img/demo/unsplash/34.jpg">
                        <div class="overlay"></div>
                        <div class="image-owner">
                            <img class="avatar" src="../via.placeholder.com/150x150.png" data-demo-src="assets/img/avatars/stella.jpg" alt="" />
                            <div class="name">Stella Bergmann</div>
                        </div>
                        <div class="photo-time">Jul 17, 2019</div>
                        <a class="photo-like is-liked">
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
        
    );
};

export default mesPhotos;