import {Resourcegroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourcegroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : Resourcegroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Resourcegroup();
}
