

const ScreenSize = () => {

    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

    const size = {
        width: x,
        height: y
    }
    return size
}

export default ScreenSize;