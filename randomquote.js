window.addEventListener("load", () => {
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
// set quote 
    $('.getquote-button').click(function(){
        let rd = Math.floor(Math.random()*(data.length + 1));
        let {text: quote} = data[rd];
        let authorquote = data[rd].author;
        quote = '\"' + quote + '\"';
        $('.quote').text(quote);
        if (authorquote == null) {
            $('.author').text("Khuyết danh");
        } else {
          authorquote = '__'+ authorquote + '__';
          $('.author').text(authorquote)};
        console.log(authorquote);
//link twitter
        let href_twitter = 'https://twitter.com/intent/tweet?text=' + quote + "\n" + authorquote;
        $('.twitter-share-button').attr("href", href_twitter);
//get api translate
/*Google API
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer ya29.a0AfH6SMAMlyjVC8cPdEvk5LhRCTLoUBPBTWsdqL6Vw7-bIHnZzjgTbSc9Ey93V5Y9VkkCu-m9gNkKHnDhJYs-s6kmXO5UNF3CDvwRHU1IOEow3zLMP0kxIl7LJ3MZfJln3j8wkKqtpNWlcaA0h8zSsPIDwmy1Qd3akwg");
var x = $('.quote').html();
var formdata = new FormData();
formdata.append("grant_type", "password");
formdata.append("username", "hoangdongpfiev@gmail.com");
formdata.append("password", "Hoangdong123");
formdata.append("client_id", "102296087496566891078");
formdata.append("client_secret", "cKw6hrxWc2jT0kCnmCD9lG-E");
formdata.append("q", x);
formdata.append("source", "en");
formdata.append("target", "vi");
formdata.append("format", "text");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://translation.googleapis.com/language/translate/v2?9f0c0631b3a0ff6c4781546db4841e3e9f734533", requestOptions)
.then(function(response) {
  return response.json();
})
.then(function(result) {
  //let {translations: [{translatedText: trans}]} = data.translations;
  console.log(result);
  $('.quote-tran').text(result.data.translations[0].translatedText);
  console.log(result.data.translations[0].translatedText)});*/
  //mymemory api
$('.quote-tran').text('');
var x = data[rd].text;
const api = `https://api.mymemory.translated.net/get?q=${x}&langpair=en|vi`;
fetch(api)
.then(function(response) {
  return response.json();
})
.then(function(result) {
  //let {translations: [{translatedText: trans}]} = data.translations;
  $('.trans-button').click(function(){
    $('.quote-tran').text(result.responseData.translatedText);
  });
  });
});
});
});
