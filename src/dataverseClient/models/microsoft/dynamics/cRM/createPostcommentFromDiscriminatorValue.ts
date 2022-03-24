import {Postcomment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostcommentFromDiscriminatorValue(parseNode: ParseNode | undefined) : Postcomment {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Postcomment();
}
