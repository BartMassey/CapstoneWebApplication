import { Reviews } from '../imports/api/reviews.js';

Router.route('/reviewForm', function(){
    this.render('ReviewFormTemplate');
});

Router.route('/reviewForm/:reviewer/:reviewee', function(){
    this.render('DisplayReviewTemplate', {
        data: function(){
            return Reviews.findOne({reviewer: this.params.reviewer, reviewee: this.params.reviewee});
        }
    });
})