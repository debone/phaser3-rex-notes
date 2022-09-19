const CharTypeName = 'text';
const ImageTypeName = 'image';
const RenderTypeName = 'render';
const SpaceTypeName = 'space';
const CmdTypeName = 'command';

var IsNewLineChar = function (bob) {
    return (bob.type === CharTypeName) && (bob.text === '\n');
}

var IsSpaceChar = function (bob) {
    return (bob.type === CharTypeName) && (bob.text === ' ');
}

var IsChar = function (bob) {
    return (bob.type === CharTypeName);
}

var IsCommand = function (bob) {
    return bob.type === CmdTypeName;
}

export {
    CharTypeName,
    ImageTypeName,
    RenderTypeName,
    SpaceTypeName,
    CmdTypeName,
    IsNewLineChar,
    IsSpaceChar,
    IsChar,
    IsCommand
}