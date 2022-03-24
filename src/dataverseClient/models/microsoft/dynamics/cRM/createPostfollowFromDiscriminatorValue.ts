import {Postfollow} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostfollowFromDiscriminatorValue(parseNode: ParseNode | undefined) : Postfollow {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Postfollow();
}
