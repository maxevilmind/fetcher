import Immutable from 'immutable'

export function fetchGoogle (name) {
  console.log("works " + name);
  return new Promise(function(resolve, reject) {
    fetch('https://www.google.com/search?q=' + name)
            .then((response) => response.text())
            .then((responseText) => {
                let res = Immutable.List([]);
                let links = Immutable.Map();
                links = links.set('gmail', new RegExp('(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))'));
                links = links.set('twitter', new RegExp('https?:\/\/(www\.)?twitter\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)'));
                links = links.set('instagram', new RegExp('https?:\/\/(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)'));
                links = links.set('github', new RegExp('http(s)?:\/\/(www\.)?github\.com/[A-z 0-9 _ -]+\/?'));
                links = links.set('linkedin', new RegExp('http(s)?:\/\/([\w]+\.)?linkedin\.com\/in\/(A-z 0-9 _ -)\/?'));
                links = links.set('facebook', new RegExp('http(s)?:\/\/(www\.)?(facebook|fb)\.com\/(A-z 0-9 _ - \.)\/?'));
                links = links.set('skype', RegExp('(?:(?:callto|skype):)(?:[a-z][a-z0-9\\.,\\-_]{5,31})(?:\\?(?:add|call|chat|sendfile|userinfo))?'));
                links = links.set('telegram', new RegExp('https?:\/\/(t(elegram)?\.me|telegram\.org)\/([a-z0-9\_]{5,32})\/?'));
                links = links.set('otherLinks', RegExp('https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)'));
                
                if (links.get('gmail').exec(responseText) !== null) {
                  res = res.push(links.get('gmail').exec(responseText));
                }
                if (links.get('twitter').exec(responseText) !== null) {
                  res = res.push(links.get('twitter').exec(responseText));
                }
                if (links.get('instagram').exec(responseText) !== null) {
                  res = res.push(links.get('instagram').exec(responseText));
                }
                if (links.get('github').exec(responseText) !== null) {
                  res = res.push(links.get('github').exec(responseText));
                }
                if (links.get('linkedin').exec(responseText) !== null) {
                  res = res.push(links.get('linkedin').exec(responseText));
                }
                if (links.get('facebook').exec(responseText) !== null) {
                  res = res.push(links.get('facebook').exec(responseText));
                }
                if (links.get('skype').exec(responseText) !== null) {
                  res = res.push(links.get('skype').exec(responseText));
                }
                if (links.get('telegram').exec(responseText) !== null) {
                  res = res.push(links.get('telegram').exec(responseText));
                }
                if (links.get('otherLinks').exec(responseText) !== null) {
                  res = res.push(links.get('otherLinks').exec(responseText));
                }
                console.log(res);
                resolve(res);
              })
            .catch((error) => {
                console.error(error);
            });
  });
};
