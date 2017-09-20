import yandex from 'yandex-search';
import Immutable from 'immutable'

export function getEmail (name) {
  console.log("works " + name);
  return new Promise(function(resolve, reject) {
    var myXmlUrl = 'https://yandex.com/search/xml?l10n=en&user=uid-aj7mljph&key=03.542382676:8e052e41c16ad2d19362b581d24eab0f';
    yandex({url: myXmlUrl, query: name}, function(err, xmlResults) {
      let res = Immutable.List([]);
      var gmail = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
      console.log(gmail.exec(xmlResults));
      var twitter = new RegExp('https?:\/\/(www\.)?twitter\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)');
      console.log(twitter.exec(xmlResults));
      var instagram = /https?:\/\/(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/;
      console.log(instagram.exec(xmlResults));
      var github = RegExp('http(s)?:\/\/(www\.)?github\.com/[A-z 0-9 _ -]+\/?');
      console.log(github.exec(xmlResults));
      var linkedin = /http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/(A-z 0-9 _ -)\/?/;
      console.log(linkedin.exec(xmlResults));
      var facebook = /http(s)?:\/\/(www\.)?(facebook|fb)\.com\/(A-z 0-9 _ - \.)\/?/;
      console.log(facebook.exec(xmlResults));
      var skype = /(?:(?:callto|skype):)(?:[a-z][a-z0-9\\.,\\-_]{5,31})(?:\\?(?:add|call|chat|sendfile|userinfo))?/;
      console.log(skype.exec(xmlResults));
      var telegram = /https?:\/\/(t(elegram)?\.me|telegram\.org)\/([a-z0-9\_]{5,32})\/?/;
      console.log(telegram.exec(xmlResults));
      if (gmail.exec(xmlResults) !== null) {
        res = res.push(gmail.exec(xmlResults));
      }
      if (twitter.exec(xmlResults) !== null) {
        res = res.push(twitter.exec(xmlResults));
      }
      if (instagram.exec(xmlResults) !== null) {
        res = res.push(instagram.exec(xmlResults));
      }
      if (github.exec(xmlResults) !== null) {
        res = res.push(github.exec(xmlResults));
      }
      if (linkedin.exec(xmlResults) !== null) {
        res = res.push(linkedin.exec(xmlResults));
      }
      if (facebook.exec(xmlResults) !== null) {
        res = res.push(facebook.exec(xmlResults));
      }
      if (skype.exec(xmlResults) !== null) {
        res = res.push(skype.exec(xmlResults));
      }
      if (telegram.exec(xmlResults) !== null) {
        res = res.push(telegram.exec(xmlResults));
      }
      console.log(res);
      resolve(res);
    })
  });
};
