const response = require('../components/response.js');
const _ = require('underscore');
const config = require('../data/twitter_config')
const Twitter = require('twitter-node-client').Twitter;
const twitter = new Twitter(config);
class TwitterSocialReader {
    constructor() { }
    getTwitterEntities(req, res) {
        twitter.getHomeTimeline({ count: '10' }, response.error, response.success)
    }
    
    // getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
    //     $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
    //     return $connection;
    // }

    // $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

    // $tweets = $connection -> get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
}
module.exports = TwitterSocialReader;