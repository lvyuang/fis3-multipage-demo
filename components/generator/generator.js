function createDivNode(classIndex) {
    var div = document.createElement('div');
    div.className = "img" + classIndex;

    return div;
}

function appendToBody(node) {
    document.body.appendChild(node);
}

/**
 * 生成图片列表
 */
module.exports = function (from, to) {
    var index = from;

    for (; index <= to; index++) {
        appendToBody(createDivNode(index));
    }
};
