/**
 * @fileOverview VOM
 * @author 行列
 * @version 1.0
 */
define("magix/vom", ["magix/vframe", "magix/magix", "magix/event"], function(Vframe, Magix, Event) {
    var Has = Magix.has;
var Mix = Magix.mix;
var VframesCount = 0;
var FirstVframesLoaded = 0;
var LastPercent = 0;
var FirstReady = 0;
var Vframes = {};
var Loc = {};
var Chged = {};
/**
 * VOM对象
 * @name VOM
 * @namespace
 * @borrows Event.on as on
 * @borrows Event.fire as fire
 * @borrows Event.off as off
 * @borrows Event.once as once
 */
var VOM = Magix.mix({
    /**
     * @lends VOM
     */
    /**
     * 获取所有的vframe对象
     * @return {Object}
     */
    all: function() {
        return Vframes;
    },
    /**
     * 注册vframe对象
     * @param {Vframe} vf Vframe对象
     */
    add: function(vf) {
        if (!Has(Vframes, vf.id)) {
            VframesCount++;
            Vframes[vf.id] = vf;
            VOM.fire('add', {
                vframe: vf
            });
        }
    },
    /**
     * 根据vframe的id获取vframe对象
     * @param {String} id vframe的id
     * @return {Vframe|Null} vframe对象
     */
    get: function(id) {
        return Vframes[id];
    },
    /**
     * 删除已注册的vframe对象
     * @param {String} id vframe对象的id
     * @param {Boolean} fcc 内部使用
     */
    remove: function(id, fcc) {
        var vf = Vframes[id];
        if (vf) {
            VframesCount--;
            if (fcc) FirstVframesLoaded--;
            delete Vframes[id];
            VOM.fire('remove', {
                vframe: vf
            });
        }
    },
    /**
     * 通知其中的一个vframe创建完成
     * @private
     */
    vfCreated: function() {
        if (!FirstReady) {
            FirstVframesLoaded++;
            var np = FirstVframesLoaded / VframesCount;
            if (LastPercent < np) {
                VOM.fire('progress', {
                    percent: LastPercent = np
                }, FirstReady = (np == 1));
            }
        }
    },
    /**
     * 向vframe通知地址栏发生变化
     * @param {Object} e 事件对象
     * @param {Object} e.location window.location.href解析出来的对象
     * @param {Object} e.changed 包含有哪些变化的对象
     * @private
     */
    locChged: function(e) {
        var loc = e.loc;
        var hack;
        if (loc) {
            hack = 1;
        } else {
            loc = e.location;
        }
        Mix(Loc, loc);
        if (!hack) {
            Mix(Chged, e.changed);
            var vf = Vframe.root(VOM, Loc, Chged);
            if (Chged.view) {
                vf.mountView(loc.view);
            } else {
                vf.locChged();
            }
        }
    }
    /**
     * view加载完成进度
     * @name VOM.progress
     * @event
     * @param {Object} e
     * @param {Float} e.precent 百分比
     */
    /**
     * 注册vframe对象时触发
     * @name VOM.add
     * @event
     * @param {Object} e
     * @param {Vframe} e.vframe
     */
    /**
     * 删除vframe对象时触发
     * @name VOM.remove
     * @event
     * @param {Object} e
     * @param {Vframe} e.vframe
     */
}, Event);
    return VOM;
});