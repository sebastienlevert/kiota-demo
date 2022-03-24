import {Msdyn_ocsentimentdailytopictrending} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_ocsentimentdailytopictrendingFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_ocsentimentdailytopictrending {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_ocsentimentdailytopictrending();
}
