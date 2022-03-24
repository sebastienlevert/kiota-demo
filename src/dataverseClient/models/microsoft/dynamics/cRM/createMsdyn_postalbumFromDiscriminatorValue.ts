import {Msdyn_postalbum} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_postalbumFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_postalbum {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_postalbum();
}
