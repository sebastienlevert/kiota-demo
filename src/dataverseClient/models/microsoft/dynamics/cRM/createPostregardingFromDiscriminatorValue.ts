import {Postregarding} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPostregardingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Postregarding {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Postregarding();
}
