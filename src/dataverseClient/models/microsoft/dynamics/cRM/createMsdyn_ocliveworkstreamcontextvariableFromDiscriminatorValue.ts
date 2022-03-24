import {Msdyn_ocliveworkstreamcontextvariable} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocliveworkstreamcontextvariableFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocliveworkstreamcontextvariable {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocliveworkstreamcontextvariable();
}
