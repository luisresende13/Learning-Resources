const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    dishes: [{
    	type: mongoose.Schema.Types.ObjectId,
    	ref: 'Dish'
	}],
    user: {
	    type: mongoose.Schema.Types.ObjectId,
	    ref: 'User',
	    unique: true
}
}, {
    timestamps: true
});

var Favorites = mongoose.model('Favorites', favoriteSchema);

module.exports = Favorites;