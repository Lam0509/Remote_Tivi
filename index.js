function Remote(id) {
    this.id = id;
    this.connectToTv = function (Tv) {
        console.log('Đã kết nối tới Tivi có id là ' + Tv.id)
    }
    this.switchOn = function (Tv) {
        Tv.status = true;
    }
    this.switchOff = function (Tv) {
        Tv.status = false;
    }
    this.changeChannel = function (Tv, channel) {
        if (Tv.status) {
            Tv.currentChannel = channel;
            console.log('Tivi đã chuyển đến kênh ' + Tv.currentChannel);
        } else {
            console.log('Chưa thể chuyển kênh vì chưa bật Tivi');
        }
    }
    this.increaseVolume = function (Tv) {
        if (Tv.status) {
            if (Tv.volume < 100) {
                Tv.volume++;
            } else {
                console.log('Không thể tăng âm lượng')
            }
        } else {
            console.log('Chưa bật Tivi')
        }
    }
    this.decreaseVolume = function (Tv) {
        if (Tv.status) {
            if (Tv.volume > 0) {
                Tv.volume--;
            } else {
                console.log('Không thể giảm âm lượng')
            }
        } else {
            console.log('Chưa bật Tivi')
        }
    }
}

function Tv(id, status, volume, channel) {
    this.id = id;
    this.status = status;
    this.getStatus = function () {
        if (this.status) {
            console.log('Tivi đã bật');
        } else {
            console.log('Tivi đã tắt');
        }
    }
    this.currentChannel = channel;
    this.volume = volume;
    this.getVolume = function () {
        return this.volume;
    }
}

// Khai báo remote và tivi
let remote = new Remote(1);
let tv = new Tv(2, false, 60, 5);

// Connect và bật tivi
remote.connectToTv(tv);
remote.switchOn(tv);
tv.getStatus();

// Chuyển kênh 7 và kênh 3
remote.changeChannel(tv, 7);
remote.changeChannel(tv, 3);

// Tăng âm lượng lên 2 đơn vị
remote.increaseVolume(tv);
remote.increaseVolume(tv);
console.log(tv.volume);

// Tắt tivi
remote.switchOff(tv);
tv.getStatus();




