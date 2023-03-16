class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title ;
    }
}


const musicList = [
    new Music("ARASAN DA", "UZİ","arasanda.jpg","arasanda.mp3"),    
    new Music("UNUTTUN MU BENİ", "SEZEN AKSU","unuttunmu.jpeg","unuttunmu.mp3"),    
    new Music("SENİ DERT ETMELER", "MADRİGAL","senidert.jpg","senidert.mp3")    
];
