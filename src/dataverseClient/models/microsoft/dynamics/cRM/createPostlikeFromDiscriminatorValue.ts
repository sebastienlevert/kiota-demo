import {Postlike} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostlikeFromDiscriminatorValue(parseNode: ParseNode | undefined) : Postlike {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Postlike();
}
