import {Resource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : Resource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Resource();
}
