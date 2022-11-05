function EasyHttpThis () {
    this.http = new XMLHttpRequest();
}

EasyHttpThis.prototype.get = function (url, callback) {

    this.http.open('GET', url, true);

    this.http.onload = () => {
        if(this.http.status === 200) {
            callback(JSON.parse(this.http.responseText));
        }
    }

    this.http.send();
}

EasyHttpThis.prototype.post = function (url, data, callback) {

    this.http.open('POST', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        
        callback(JSON.parse(this.http.responseText));
        
    }

    this.http.send(JSON.stringify(data));
}

EasyHttpThis.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);

    this.http.setRequestHeader('Content-type', 'application/json');

    this.http.onload = () => {
        
        callback(JSON.parse(this.http.responseText));
        
    }

    this.http.send(JSON.stringify(data));
}

EasyHttpThis.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    this.http.onload = () => {
        callback(null, 'Post deleted...');
    }

    this.http.send();
}