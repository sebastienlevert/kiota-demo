import {Resourcespec} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createResourcespecFromDiscriminatorValue(parseNode: ParseNode | undefined) : Resourcespec {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Resourcespec();
}
