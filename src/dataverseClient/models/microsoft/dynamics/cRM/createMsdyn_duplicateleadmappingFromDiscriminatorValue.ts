import {Msdyn_duplicateleadmapping} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_duplicateleadmappingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_duplicateleadmapping {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_duplicateleadmapping();
}
