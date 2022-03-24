import {Msdyn_ocsentimentdailytopic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsentimentdailytopicFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsentimentdailytopic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsentimentdailytopic();
}
