const response = require('../components/response.js');
const _ = require('underscore');
const config = require('../data/twitter_config')
// const Twitter = require('twitter-node-client').Twitter;
// const twitter = new Twitter(config);
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: '9XjIWUwEcmauIcOIuEx1KaMDG',
    consumer_secret: 'HKlfswBzTNBO1ZNAoZ0EKDzYVO6Xd5iPrC0rSpRmyLwUhRRTI5',
    access_token_key: '931057034694242304-NEvPTrQeAIsz17srd6V8a4SED4mggDs',
    access_token_secret: 'iVLEVrnzHH67Q8o4JuOSwFT4d1u1i8UqzxSRqLfHp4DVp'
  });
class TwitterSocialReader {
    constructor() { }
    getTwitterEntities(req, res) {
        // twitter.getHomeTimeline({ count: '10' }, response.error, response.success)
        client.get('favorites/list', function(error, tweets, response) {
            if(error) throw error;
            console.log(tweets[1].entities);  // The favorites.
            //console.log(response);  // Raw response object.
          });
    }
    
    // getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
    //     $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
    //     return $connection;
    // }

    // $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);

    // $tweets = $connection -> get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=".$twitteruser."&count=".$notweets);
 
}
module.exports = TwitterSocialReader;