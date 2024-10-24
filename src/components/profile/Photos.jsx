const Photos = () => {
    return (

        <div>
            <div class="box-heading">
                <h4>Photos</h4>
                <div class="dropdown is-neutral is-spaced is-right dropdown-trigger">
                    <div>
                        <div class="button">
                            <i data-feather="more-vertical"></i>
                        </div>
                    </div>
                    <div class="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                            <a class="dropdown-item">
                                <div class="media">
                                    <i data-feather="image"></i>
                                    <div class="media-content">
                                        <h3>View Photos</h3>
                                        <small>View all your photos</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="tag"></i>
                                    <div class="media-content">
                                        <h3>Tagged</h3>
                                        <small>View photos you are tagged in.</small>
                                    </div>
                                </div>
                            </a>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <i data-feather="folder"></i>
                                    <div class="media-content">
                                        <h3>Albums</h3>
                                        <small>Open my albums.</small>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="is-photos-widget">
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/1.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/2.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/3.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/4.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/5.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/6.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/7.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/8.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/9.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/10.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/11.jpg" alt="" />
                <img src="../via.placeholder.com/200x200.png" data-demo-src="assets/img/demo/widgets/photos/12.jpg" alt="" />
            </div>
        </div>
    );
};

export default Photos;